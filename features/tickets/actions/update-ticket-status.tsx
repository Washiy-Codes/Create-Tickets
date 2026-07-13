"use server";

import { TicketStatus } from "@prisma/client";
import { fromErrorToActionState, toActionState } from "@/components/form/utils/to-action-state";
import prisma from "@/lib/prisma";
import { ticketsPath } from "@/paths";
import { revalidatePath } from "next/dist/server/web/spec-extension/revalidate";
import { getAuthOrRedirect } from "@/features/auth/actions/get-auth-or-redirect";
import { isOwner } from "@/features/auth/utils/is-owner";

const updateTicketStatus = async (ticketId: string, status: TicketStatus) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const {user} = await getAuthOrRedirect();
    
    try{
        const ticket = await prisma.ticket.findUnique({
            where: {
                id: ticketId
            }
        });
        if(!ticket || !(await isOwner(user, ticket))){
            return toActionState("ERROR", "Not authorized to update the status of this ticket");
        }
     await prisma.ticket.update({
        where: { 
            id: ticketId 
        },
        data: { 
            status
         }
    });
}catch(error){
    return fromErrorToActionState(error);
}
 revalidatePath(ticketsPath());
    
 return toActionState("SUCCESS", "Ticket status updated");
}

export { updateTicketStatus }