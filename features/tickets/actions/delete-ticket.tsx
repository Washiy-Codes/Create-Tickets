"use server";
import { setCookieByKey } from "@/components/actions/cookies";
import prisma from "@/lib/prisma";
import { ticketsPath } from "@/paths";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";


const deleteTicket = async(id: string) => {
     await prisma.ticket.delete({
        where: {
            id
        }
    });
    revalidatePath(ticketsPath());
     await setCookieByKey("toast", "Ticket deleted");
    redirect(ticketsPath());
}
   
export {deleteTicket}