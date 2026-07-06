"use server"

import prisma from "@/lib/prisma";

type getCommentProps = {
    ticketId: string;
    
}

const getComment = async ({ ticketId}: getCommentProps) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
   return await prisma.comment.findMany({
        where: {
            ticketId
        },
        include: {
            user: {
                select: {
                    username: true
                }
            }
        },
        orderBy: {
            createdAt: "asc"
        }
    });
}


export { getComment }