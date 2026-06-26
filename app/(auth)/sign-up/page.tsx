import { CardCompact } from "@/components/card-compact"
import { SignUpForm } from "@/features/auth/components/sign-up-form"
import { signInPath } from "@/paths"
import Link from "next/link"

const SignUpPage = () => {
  return (
    <div className="flex flex-1 flex-col gap-8 items-center justify-center">
      <CardCompact 
        title="Sign Up"
        description="Create an a account to get started."
        className="max-w-120 w-full animate-fade-in-from-top"
        content={<SignUpForm />}
        footer = {<Link href={signInPath()} className="text-sm text-muted-foreground hover:text-primary transition-colors">Already have an account? Sign In</Link>}
      />
    </div>
  )
}

export default SignUpPage