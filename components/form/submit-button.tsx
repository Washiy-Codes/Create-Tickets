"use client"
import { useFormStatus } from "react-dom"
import { Button } from "../ui/button"
import { LoaderCircle } from "lucide-react"
type SubmitButtonProps = { 
    label: string,
    } 

const SubmitButton = ({ label }: SubmitButtonProps) => {
    const { pending } = useFormStatus()

    return(
        <Button type="submit" disabled={pending}>
        {pending && <LoaderCircle className="animate-spin h-4 w-4 mr-2" /> } 
        {label}
      </Button>

    )
}

export { SubmitButton }