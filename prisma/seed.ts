import { PrismaClient } from "@prisma/client"; 
import { PrismaPg } from "@prisma/adapter-pg";
import bcrypt from "bcryptjs";
import "dotenv/config";
const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});
const prisma = new PrismaClient({
  adapter,
});

const users = [
    { username: "admin", 
      email: "admin@example.com", 
    },
    { username: "user1", 
      email: "user1@example.com",
    },

]

const tickets = [
    { title: 'Sample Ticket 1', content: 'This is the first ticket from the database.', status:"OPEN" as const }, 
    { title: 'Sample Ticket 2', content: 'This is the second ticket from the database.', status:"DONE" as const },
    { title: 'Sample Ticket 3', content: 'This is the third ticket from the database.', status:"IN_PROGRESS" as const },
]; 


const seed = async () => {
    const t0 = performance.now();
    console.log("DB seed: Starting...");

    await prisma.ticket.deleteMany();
    await prisma.user.deleteMany();


    const passwordHash = await bcrypt.hash("password", 10);
    
    const dbUser = await prisma.user.createManyAndReturn({
        data: users.map((user) => ({ ...user, passwordHash })),
    });

    await prisma.ticket.createMany({
        data: tickets.map((ticket) => ({ ...ticket, userId: dbUser[0].id })), // Associate all tickets with the first user
    });

    const t1 = performance.now();
    console.log(`DB seed: Finished in ${(t1 - t0).toFixed(2)} ms`);
    console.log(dbUser);
}


seed()