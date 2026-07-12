"use client"
import { useFormStatus } from "react-dom"
import { Button } from "../ui/button"
import { LucideLoaderCircle } from "lucide-react"
import { clsx } from "clsx"
import {cloneElement} from "react"

type SubmitButtonProps = { 
    label?: string,
    icon?: React.ReactElement<{className?: string}>,
    variant?: "default" | "outline" | "ghost" | "link" | "destructive" | "secondary"
    size?: "default" | "sm" | "lg"
} 

const SubmitButton = ({ label, icon, variant, size }: SubmitButtonProps) => {
    const { pending } = useFormStatus()

return (
  <Button disabled={pending} type="submit" variant={variant} size={size}>
    {pending ? (
      <LucideLoaderCircle className="h-4 w-4 animate-spin" />
    ) : icon ? (
      <>
        {cloneElement(icon, {
          className: "w-4 h-4",
        })}
      </>
    ) : null}
    {label}
  </Button>
);
}
export { SubmitButton }