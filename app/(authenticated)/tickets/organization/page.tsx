import { SearchParams } from "nuqs/server";
import { Suspense } from "react";
import { CardCompact } from "@/components/card-compact";
import { Heading } from "@/components/heading";
import { UpsertTicketForm } from "@/features/tickets/components/upsert-ticket-form";
import Spinner from "../[ticketId]/loading";
import { TicketList } from "@/features/tickets/components/ticket-list";
import { searchParamsCache } from "@/features/tickets/search-params";

type TicketsByOrganizationPageProps = {
  searchParams: Promise<SearchParams>;
};

const TicketsByOrganizationPage = async ({
  searchParams,
}: TicketsByOrganizationPageProps) => {
  return (
    <div className="flex-1 flex flex-col gap-y-8">
      <Heading
        title="Our Tickets"
        description="All tickets related to my organization"
      />

      <CardCompact
        title="Create Ticket"
        description="A new ticket will be created"
        className="w-full max-w-105 self-center"
        content={<UpsertTicketForm />}
      />

      <Suspense fallback={<Spinner />}>
        <TicketList
          byOrganization
          searchParams={searchParamsCache.parse(await searchParams)}
        />
      </Suspense>
    </div>
  );
};

export default TicketsByOrganizationPage;