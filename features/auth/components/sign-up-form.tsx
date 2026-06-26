import { SubmitButton } from "@/components/form/submit-button"
import { Input } from "@/components/ui/input"


const SignUpForm = () => {
  return (
    <form action={"signUp"} className="flex flex-col gap-4">
      <Input type="text" placeholder="Username" />
      <Input type="email" placeholder="Email" />
      <Input type="password" placeholder="Password" />
      <Input type="password" placeholder="Confirm Password" />
      <SubmitButton label="Sign Up" />
    </form>
  )
}

export {SignUpForm}