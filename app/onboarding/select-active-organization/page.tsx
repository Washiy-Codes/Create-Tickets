
import { Heading } from '@/components/heading'
import { Button } from '@/components/ui/button'
import { OrganizationList } from '@/features/organization/components/organization-list'
import { getOrganizationsForUser } from "@/features/organization/querries/get-user-organizations"
import { getAuthOrRedirect } from "@/features/auth/actions/get-auth-or-redirect"
import { organizationCreatePath, organizationPath } from '@/paths'
import { Plus } from 'lucide-react'
import Link from 'next/link'
import { redirect } from "next/navigation"

const SelectActiveOrganization = async () => {

  await getAuthOrRedirect({ checkActiveOrganization: false });
  const organizations = await getOrganizationsForUser();

  const hasActiveOrg = organizations.some((org) => org.membershipByUser?.isActive);
  if (hasActiveOrg) {
    redirect(organizationPath());
  }

  return (
    <div className='flex flex-1 flex-col gap-y-4'>
        <Heading 
          title="Select Active Organization" 
          description="Please select an organization to set as your active organization. You can only have one active organization at a time."
          action={
            <Button> {/* Use asChild when wrapping a Link component */}
              <Link href={organizationCreatePath()} className='flex items-center gap-x-2'>
                <Plus className="w-4 h-4" />
                Create Organization
              </Link>
            </Button>
          }
        />
        {/* Removed Suspense here since data is pre-fetched above for the redirect check */}
        <OrganizationList limitedAccess />
    </div>
  )
}

export default SelectActiveOrganization;
