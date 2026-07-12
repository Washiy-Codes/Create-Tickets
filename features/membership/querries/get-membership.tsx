import { getAuthOrRedirect } from "@/features/auth/actions/get-auth-or-redirect"
import prisma from "@/lib/prisma"

const getMembership = async({organizationId, userId}: {organizationId: string, userId: string})=>{
    await getAuthOrRedirect()
    return await prisma.membership.findUnique({
        where:{
            organizationId_userId:{
                organizationId,
                userId
            }
        }
    })
}


export default getMembership