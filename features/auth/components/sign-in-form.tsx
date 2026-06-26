import { SubmitButton } from "@/components/form/submit-button"
import { Input } from "@/components/ui/input"


const SignInForm = () => {
  return (
    <form action={"signIn"} className="flex flex-col gap-4">
      <Input type="email" placeholder="Email" />
      <Input type="password" placeholder="Password" />
      <SubmitButton label="Sign In" />
    </form>
  )
}

export {SignInForm}