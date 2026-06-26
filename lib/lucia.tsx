import { Lucia } from "lucia";


import { PrismaAdapter } from "@lucia-auth/adapter-prisma";
import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

const adapter = new PrismaAdapter(client.session, client.user);

export const lucia = new Lucia(adapter, {
	sessionCookie: {
		expires: false,
		attributes: {
			secure: process.env.NODE_ENV === "production",
		},
	},
	getUserAttributes: (attributes) => ({
		username: attributes.username,
		email: attributes.email,
	}),
});

// IMPORTANT!
declare module "lucia" {
	interface Register {
		Lucia: typeof lucia;
		DatabaseUserAttributes: DatabaseUserAttributes;
	}
}

interface DatabaseUserAttributes {
	username: string;
	email: string;
}



// import { Lucia } from "lucia";

// const adapter = new BetterSQLite3Adapter(db); // your adapter

// export const lucia = new Lucia(adapter, {
// 	sessionCookie: {
// 		attributes: {
// 			// set to `true` when using HTTPS
// 			secure: process.env.NODE_ENV === "production"
// 		}
// 	}
// });

// // IMPORTANT!
// declare module "lucia" {
// 	interface Register {
// 		Lucia: typeof lucia;
// 	}
// }