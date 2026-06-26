import { CardCompact } from "@/components/card-compact"
import { SignInForm } from "@/features/auth/components/sign-in-form"

const SignInPage = () => {
  return (
     <div className="flex flex-1 flex-col gap-8 items-center justify-center">
         <CardCompact 
            title="Sign In"
            description="Sign in to your account to continue."
            className="max-w-125 w-full animate-fade-in-from-top"
            content={<SignInForm />}
            />
        </div>
  )
}

export default SignInPage