// "use client";

// import { useConfirmDialog } from "@/components/confirm-dialog";
// import { deleteMembership } from "../actions/delete-membership";

// type MembershipDeleteButtonProps = {
//   userId: string;
//   organizationId: string;
//   trigger: React.ReactElement<{
//     onClick?: React.MouseEventHandler<HTMLButtonElement>;
//   }>;
// };

// const MembershipDeleteButton = ({
//   userId,
//   organizationId,
//   trigger,
// }: MembershipDeleteButtonProps) => {
//   const [deleteDialog, deleteButton] = useConfirmDialog({
//     action: deleteMembership.bind(null, {
//       userId,
//       organizationId,
//     }),
//     trigger,
//   });

//   return (
//     <>
//       {deleteDialog}
//       {deleteButton}
//     </>
//   );
// };

// export { MembershipDeleteButton };

"use client";

import { LucideLogOut } from "lucide-react";
import { useConfirmDialog } from "@/components/confirm-dialog";
import { Button } from "@/components/ui/button";
import { deleteMembership } from "../actions/delete-membership";

type MembershipDeleteButtonProps = {
  userId: string;
  organizationId: string;
};

const MembershipDeleteButton = ({
  userId,
  organizationId,
}: MembershipDeleteButtonProps) => {

  const [deleteButton, deleteDialog] = useConfirmDialog({
    action: async () =>
      deleteMembership({
        userId,
        organizationId,
      }),
    trigger: (
      <Button variant="destructive" size="icon">
        <LucideLogOut className="w-4 h-4" />
      </Button>
    ),
  });
  
  return (
    <>
      {deleteDialog}
      {deleteButton}
    </>
  );
};

export { MembershipDeleteButton };
