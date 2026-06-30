"use client"
import { useFormStatus } from "react-dom"
import { Button } from "../ui/button"
import { LoaderCircle } from "lucide-react"
import { clsx } from "clsx"
import { useEffect, useRef } from "react"

type SubmitButtonProps = { 
    label?: string,
    icon?: React.ReactElement
    // variant?: "default" | "outline" | "ghost" | "link" | "destructive" | "secondary" | "success" | "warning" | "error"
    // size?: "default" | "sm" | "lg"
} 

const SubmitButton = ({ label, icon}: SubmitButtonProps) => {
    const { pending } = useFormStatus()
    
    return(
        <Button type="submit" disabled={pending}>
     {pending && <LoaderCircle className={clsx("animate-spin h-4 w-4", {
            "mr-2": !!label
      })} /> }  
        {label}
        {!pending && icon && (
  <span
    className={clsx({
      "ml-2": !!label,
    })}
  >
    {icon}
  </span>
)}
      </Button>

    )
}

export { SubmitButton }