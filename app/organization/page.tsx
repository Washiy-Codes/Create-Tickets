import { Heading } from '@/components/heading'
import Spinner from '@/components/spinner'
import { Button } from '@/components/ui/button'
import { OrganizationList } from '@/features/organization/components/organization-list'
import { organizationCreatePath } from '@/paths'
import { Plus } from 'lucide-react'
import Link from 'next/link'
import { Suspense } from 'react'

const OrganizationPage = () => {
  return (
    <div className='flex flex-1 flex-col gap-y-4'>
        <Heading title="Organizations" description="Manage your organization settings and members."
          action={
            <Button>
              <Link href={organizationCreatePath()} className='flex items-center gap-x-2'>
                <Plus />
                Create Organization
              </Link>
            </Button>
          }
        />
        <Suspense fallback={<Spinner />}>
            <OrganizationList />
        </Suspense>
    </div>
  )
}

export default OrganizationPage