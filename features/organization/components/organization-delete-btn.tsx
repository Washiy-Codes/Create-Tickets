
"use client";

import { deleteOrganization } from "../actions/delete-organization";
import { useConfirmDialog } from "@/components/confirm-dialog";

type OrganizationDeleteButtonProps = {
  organizationId: string;
  trigger: React.ReactElement<{
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
  }>;
};

const OrganizationDeleteButton = ({
  organizationId,
  trigger,
}: OrganizationDeleteButtonProps) => {
  const [deleteDialog, deleteButton] = useConfirmDialog({
    action: deleteOrganization.bind(null, organizationId),
    trigger,
  });

  return (
    <>
      {deleteDialog}
      {deleteButton}
    </>
  );
};

export { OrganizationDeleteButton };





























