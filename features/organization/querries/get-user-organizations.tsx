
import prisma from "@/lib/prisma";
import { auth } from "@/auth";

const getOrganizationsForUser = async () => {
    const session = await auth();
    const user = session?.user;
    if (!user) {
        return [];
    }
    
    const organizations = await prisma.organization.findMany({
        where: {
            memberships: {
                some: {
                    userId: user.id
                }   
            }
        },
        include: {
            memberships: {
                where: {
                    userId: user.id
                }
            },
            _count: {
                select: {
                    memberships: true
                }
            }
        },
    });
    return organizations.map((org) => ({
        ...org,
        membershipByUser: org.memberships[0] || null
    }));
};

export { getOrganizationsForUser };



