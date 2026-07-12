
import { format } from "date-fns";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import {
  LucideArrowLeftRight,
  LucideArrowUpRightFromSquare,
  LucideLockKeyhole,
  LucidePen,
  LucideTrash,
} from "lucide-react";
import { getOrganizationsForUser } from "../querries/get-user-organizations";
import { OrganizationSwitchButton } from "./switch-organization-button";
import { SubmitButton } from "@/components/form/submit-button";
import { OrganizationDeleteButton } from "./organization-delete-btn";
import Link from "next/link";
import { membershipsPath } from "@/paths";
import { MembershipDeleteButton } from "@/features/membership/components/membership-delete-btn";

const OrganizationList = async ({limitedAccess}: {limitedAccess?: boolean}) => {
  const organizations = await getOrganizationsForUser();

  const hasActive = organizations.some((organization) => organization.membershipByUser.isActive
  );

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Joined At</TableHead>
          <TableHead>Members</TableHead>
          <TableHead>My Role</TableHead>
          <TableHead />
        </TableRow>
      </TableHeader>
      <TableBody>
        {organizations.map((organization) => {

          const isAdmin = organization.membershipByUser?.membershipRole === "ADMIN";
          
          const isActive = organization.membershipByUser?.isActive ?? false;
          const switchButton= (<OrganizationSwitchButton 
                organizationId={organization.id}  
                trigger={
                <SubmitButton
                  variant={!hasActive? "secondary"  : isActive ? "default" : "outline"}
                   icon={<LucideArrowLeftRight className="w-4 h-4" />}
                   label={!hasActive? "Activate"  :isActive ? "Active" : "Switch"}
                   />
               } 
              />)
          const detailsButton = (<Button variant="outline" size="icon" asChild>
                <Link href={membershipsPath(organization.id)}>
                <LucideArrowUpRightFromSquare className="w-4 h-4" />
                </Link>
              </Button>)
          const editButton = (<Button variant="outline" size="icon" asChild>
                <span>
                <Link href={`/organization/${organization.id}/edit`} />
                <LucidePen className="w-4 h-4" />
                </span>
              </Button>)

          const deleteButton = (<OrganizationDeleteButton organizationId={organization.id}
              trigger={
                <Button variant="destructive" size="icon">
                  <LucideTrash className="w-4 h-4" />
                </Button>
              }
              />)
              const leaveButton = (<MembershipDeleteButton 
                userId={organization.membershipByUser.userId}
                organizationId={organization.id}
              />)
              const placeholderButton = (<Button variant="outline" size="icon" disabled>
                <LucideLockKeyhole />
              </Button>)
          const buttons = (
            <>            
              {switchButton}
              {limitedAccess ? null : isAdmin ? detailsButton : placeholderButton}
              {limitedAccess ? null : isAdmin ? editButton : placeholderButton}
              {limitedAccess ? null : leaveButton}
              {limitedAccess ? null : isAdmin ? deleteButton : placeholderButton}  
            </>
          );

          return (
            <TableRow key={organization.id}>
              <TableCell className="font-mono text-xs">{organization.id}</TableCell>
              <TableCell>{organization.name}</TableCell>
              <TableCell>
                {organization.membershipByUser?.joinedAt
                  ? format(new Date(organization.membershipByUser.joinedAt), "yyyy-MM-dd, HH:mm")
                  : "-"}
              </TableCell>
              <TableCell>{organization._count?.memberships ?? 0}</TableCell>
              <TableCell>{organization.membershipByUser?.membershipRole ?? "-"}</TableCell>
              <TableCell className="flex justify-end gap-x-2">{buttons}</TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

export { OrganizationList };


