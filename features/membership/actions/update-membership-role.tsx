"use server";

import { MembershipRole } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { toActionState } from "@/components/form/utils/to-action-state";
import  prisma  from "@/lib/prisma";
import { membershipsPath } from "@/paths";
import { getAdminOrRedirect } from "../querries/get-admin-or-redirect";
import getMemberships from "../querries/get-memberships";

export const updateMembershipRole = async ({
  userId,
  organizationId,
  membershipRole,
}: {
  userId: string;
  organizationId: string;
  membershipRole: MembershipRole;
}) => {
  await getAdminOrRedirect(organizationId);

  const memberships = await getMemberships(organizationId);

  // Check if membership exists
  const targetMembership = (memberships ?? []).find(
    (membership) => membership.userId === userId
  );

  if (!targetMembership) {
    return toActionState("ERROR", "Membership not found");
  }

  // Check if last admin
  const adminMemberships = (memberships ?? []).filter(
    (membership) => membership.membershipRole === "ADMIN"
  );

  const removesAdmin = targetMembership.membershipRole === "ADMIN";
  const isLastAdmin = adminMemberships.length <= 1;
   const memberToAdmin = membershipRole === "ADMIN";
   
    if (removesAdmin && isLastAdmin) {
    return toActionState(
      "ERROR",
      "You cannot remove the last admin of an organization"
    );
  }

  // Okay. Everything checked ...

  await prisma.membership.update({
    where: {
      organizationId_userId: {
        userId,
        organizationId,
      },
    },
    data: {
      membershipRole,
    },
  });

  revalidatePath(membershipsPath(organizationId));

  return toActionState("SUCCESS",
     memberToAdmin
      ? "The user has been promoted to admin"
      :
     "The role has been updated");
};