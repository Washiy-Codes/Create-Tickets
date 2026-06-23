"use client"
import { useFormStatus } from "react-dom"
import { Button } from "../ui/button"
import { LoaderCircle } from "lucide-react"
import { Ticket } from "@/app/generated/prisma/client"

type SubmitButtonProps = { 
    label: string,
     ticket?: Ticket
    } 

const SubmitButton = ({ label, ticket }: SubmitButtonProps) => {
    const { pending } = useFormStatus()

    return(
        <Button type="submit" disabled={pending}>
        {pending && <LoaderCircle className="animate-spin h-4 w-4 mr-2" /> }
        {pending ? ticket ? "Updating" : "Creating" : label} Ticket
      </Button>

    )
}

export { SubmitButton }