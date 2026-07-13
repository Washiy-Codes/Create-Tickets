import { OrganizationBreadcrumbs } from "@/app/(authenticated)/organization/[organizationId]/(admin)/_navigation/tabs";
import { Heading } from "@/components/heading";
import Spinner from "@/components/spinner";
import { InvitationCreateButton } from "@/features/invitation/components/invitation-create-btn";
import { InvitationList } from "@/features/invitation/components/invitation-list";
import { Suspense } from "react";

type InvitationsPageProps = {
  params: Promise<{
    organizationId: string;
  }>;
};

const InvitationsPage = async ({ params }: InvitationsPageProps) => {
  const { organizationId } = await params;

  return (
    <div className="flex-1 flex flex-col gap-y-8">
      <Heading
        title="Invitations"
        description="Manages your organization's invitations"
        tabs={<OrganizationBreadcrumbs />}
        action={<InvitationCreateButton organizationId={organizationId} />}
      />

      <Suspense fallback={<Spinner />}>
        <InvitationList organizationId={organizationId} />
      </Suspense>
    </div>
  );
};

export default InvitationsPage;
