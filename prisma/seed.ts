import { PrismaClient, Prisma } from "../app/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import "dotenv/config";
const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});
const prisma = new PrismaClient({
  adapter,
});

const Ticket = [
    { title: 'Sample Ticket 1', content: 'This is the first ticket from the database.', status:"OPEN" as const }, 
    { title: 'Sample Ticket 2', content: 'This is the second ticket from the database.', status:"DONE" as const },
    { title: 'Sample Ticket 3', content: 'This is the third ticket from the database.', status:"IN_PROGRESS" as const },
]; 


const seed = async () => {
    const t0 = performance.now();
    console.log("DB seed: Starting...");
    await prisma.ticket.deleteMany();
    await prisma.ticket.createMany({
        data: Ticket,
    });
    const t1 = performance.now();
    console.log(`DB seed: Finished in ${(t1 - t0).toFixed(2)} ms`);
}
seed()