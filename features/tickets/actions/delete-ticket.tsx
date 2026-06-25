"use server";
import { setCookieByKey } from "@/components/actions/cookies";
import { fromErrorToActionState } from "@/components/form/utils/to-action-state";
import prisma from "@/lib/prisma";
import { ticketsPath } from "@/paths";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";


const deleteTicket = async(id: string) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    try{
     await prisma.ticket.delete({
        where: {
            id
        }
    });
}catch(error) {
   return fromErrorToActionState(error);
}
    revalidatePath(ticketsPath());
     await setCookieByKey("toast", "Ticket deleted");
    redirect(ticketsPath());
}
   
export {deleteTicket}