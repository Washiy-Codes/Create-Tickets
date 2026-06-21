"use server";

import prisma from "@/lib/prisma";
import { ticketPath, ticketsPath } from "@/paths";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const upsertTicket = async (id: string, formData: FormData) => {
    const data = {
        title: formData.get("title"),
        content: formData.get("content")
    };

    await prisma.ticket.upsert({
        where:{
            id: id || "",
        } ,
        update:{
            title: data.title as string,
            content: data.content as string,
        },
        create:{
            title: data.title as string,
            content: data.content as string,
        }
    });
    revalidatePath(ticketsPath());
    
    if(id){
      redirect(ticketPath(id));

    }
};

export { upsertTicket };