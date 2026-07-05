// "use client";
// import { Form } from "@/components/form/form";
// import { SubmitButton } from "@/components/form/submit-button";
// import { EMPTY_ACTION_STATE } from "@/components/form/utils/to-action-state";
// import { Input } from "@/components/ui/input";
// import { useActionState, useEffect} from "react";
// import { signInAction } from "../actions/sign-in";
// import { FieldErrors } from "@/components/form/field-errors";
// import { LogInWithSocials } from "@/app/socials/socials-login";
// import { useRouter } from "next/navigation";


// const SignInForm =  () => {
//   const [actionState, action] = useActionState(signInAction, EMPTY_ACTION_STATE);
//   const router = useRouter();

//   useEffect(() => {
//     if (actionState.status === "SUCCESS") {
//       router.refresh(); 
//     }
//   }, [actionState, router]);

//   return (
//     <div className="flex flex-col gap-4">
//       <Form action={action} actionState={actionState} >
//         <Input name="email" type="email" placeholder="Email" defaultValue={actionState.payload?.get("email") as string}  />
//         <FieldErrors name="email" actionState={actionState} />
        
//         <Input name="password" type="password" placeholder="Password" defaultValue={actionState.payload?.get("password") as string}  />
//         <FieldErrors name="password" actionState={actionState} />
        
//         <SubmitButton label="Sign In" />
//       </Form>
//       <LogInWithSocials />
//     </div>
//   );
// };

// export { SignInForm };






"use client";
import { Form } from "@/components/form/form";
import { SubmitButton } from "@/components/form/submit-button";
import { EMPTY_ACTION_STATE } from "@/components/form/utils/to-action-state";
import { Input } from "@/components/ui/input";
import { useActionState, useEffect} from "react";
import { signInAction } from "../actions/sign-in";
import { FieldErrors } from "@/components/form/field-errors";
import { LogInWithSocials } from "@/app/socials/socials-login";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react"; // 1. Import useSession

const SignInForm =  () => {
  const [actionState, action] = useActionState(signInAction, EMPTY_ACTION_STATE);
  const router = useRouter();
  const { update } = useSession(); // 2. Destructure the update function

  useEffect(() => {
    if (actionState.status === "SUCCESS") {
      // 3. CRITICAL: Tells the SessionProvider to re-fetch the cookie immediately
      update().then(() => {
        router.refresh(); 
      });
    }
  }, [actionState.status, router, update]); // Cleaned up dependency array strings

  return (
    <div className="flex flex-col gap-4">
      <Form action={action} actionState={actionState} >
        <Input name="email" type="email" placeholder="Email" defaultValue={actionState.payload?.get("email") as string}  />
        <FieldErrors name="email" actionState={actionState} />
        
        <Input name="password" type="password" placeholder="Password" defaultValue={actionState.payload?.get("password") as string}  />
        <FieldErrors name="password" actionState={actionState} />
        
        <SubmitButton label="Sign In" />
      </Form>
      <LogInWithSocials />
    </div>
  );
};

export { SignInForm };
