import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Ticket } from "@/app/generated/prisma/client"
import { upsertTicket } from "../actions/upsert-ticket"
type UpsertTicketFormProps = {
    ticket?: Ticket;
}

const UpsertTicketForm = ({ ticket }: UpsertTicketFormProps) => {
     return (
    <form action={upsertTicket.bind(null, ticket?.id)} className="flex flex-col gap-2">
      <Label htmlFor="title">Title</Label>
      <Input type="text" id="title" name="title" defaultValue={ticket?.title} required />
      <Label htmlFor="content">Content</Label>
      <Textarea id="content" name="content" defaultValue={ticket?.content} required></Textarea>
      <Button type="submit">{ticket ? "Edit" : "Create"} Ticket</Button>
    </form>
  )
}

export {UpsertTicketForm}
