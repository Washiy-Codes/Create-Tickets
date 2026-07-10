import { CardCompact } from "@/components/card-compact"
import { OrganizationCreateForm } from "@/features/organization/components/create-organization-form"

const OnboadingPage = () => {
  
  return (
     <div className="flex flex-1 flex-col gap-8 items-center justify-center">
         <CardCompact 
            title="Create Organization"
            description="Enter your organization name to get started."
            className="max-w-md w-full animate-fade-in-from-top "
            content={<OrganizationCreateForm />} />
      </div>
  )
}

export default OnboadingPage