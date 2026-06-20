import { Heading } from '@/components/heading';
import { Placeholder } from '@/components/placeholder';
import { Button } from '@/components/ui/button';
import { TicketItem } from '@/features/tickets/components/ticket-item';
import getTicket from '@/features/tickets/queries/get-ticket';
import { ticketsPath } from '@/paths';
import Link from 'next/link';
type TicketPageProps = {
  params: Promise<{
    ticketId: string;}>;
};
const TicketPage= async({params}: TicketPageProps) => {
      const {ticketId} = await params;  

    const ticket = await getTicket({ticketId});
    if(!ticket) {
        return (
             <Placeholder label="Ticket not found." button = 
             <Button>
            <Link href={ticketsPath()}>Back to Tickets</Link>
            </Button>
                />
        )
    }
  return (
    <div>
        <Heading title="Ticket Page" />
        <div className="flex justify-center animate-fade-in-from-top mt-4">
            <TicketItem ticket={ticket} isDetail={true} />
        </div>
    </div>

  )
}

export default TicketPage
