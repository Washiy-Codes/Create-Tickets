"use server";
import { setCookieByKey } from "@/components/actions/cookies";
import { fromErrorToActionState, toActionState } from "@/components/form/utils/to-action-state";
import { getAuthOrRedirect } from "@/features/auth/actions/get-auth-or-redirect";
import { isOwner } from "@/features/auth/utils/is-owner";
import prisma from "@/lib/prisma";
import { ticketsPath } from "@/paths";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { getTicketPermissions } from "../components/permission/get-ticket-permission";


const deleteTicket = async(id: string) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const {user} = await getAuthOrRedirect();
    try{
        const ticket = await prisma.ticket.findUnique({
            where: {
                id
            }
        });
        if(!ticket || !(await isOwner(user, ticket))){
            return toActionState("ERROR", "Not authorized to delete this ticket");
        }
        const permission = await getTicketPermissions({
            organizationId: ticket.organizationId,
            userId: user?.id,
        });
        if (!permission.canDeleteTicket) {
            return toActionState("ERROR", "Not authorized to delete this ticket");
        }
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