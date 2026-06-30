import { CardCompact } from "@/components/card-compact"
import { SignInForm } from "@/features/auth/components/sign-in-form"
import { signUpPath, forgotPasswordPath } from "@/paths"
import Link from "next/dist/client/link"

const SignInPage = () => {

  return (
     <div className="flex flex-1 flex-col gap-8 items-center justify-center">
         <CardCompact 
            title="Sign In"
            description="Sign in to your account to continue."
            className="max-w-100 w-full animate-fade-in-from-top"
            content={<SignInForm />}
            footer = {
              <div className="flex flex-row justify-between gap-20">
            <Link href={signUpPath()} className="text-sm text-muted-foreground transition-colors">No account yet?</Link>
            
            <Link href={forgotPasswordPath()} className="text-sm text-muted-foreground transition-colors">Forgot Password?</Link>
            
            </div>
            }
          />
          </div>
  )
}

export default SignInPage