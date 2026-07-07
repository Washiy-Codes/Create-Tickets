import { CardCompact } from "@/components/card-compact"
import { ResetPasswordForm } from "@/features/password/components/reset-password-form"

type ResetPasswordProps = {
  params: Promise<{
    tokenId: string;
  }>;
};

const ResetPassword = async({params}: ResetPasswordProps) => {
  const { tokenId } = await params;
  
  return (
     <div className="flex flex-1 flex-col gap-8 items-center justify-center">
         <CardCompact 
            title="Reset Password"
            description="Enter your new password to reset your account password."
            className="max-w-md w-full animate-fade-in-from-top "
            content={<ResetPasswordForm tokenId={tokenId} />}
          />
      </div>
  )
}

export default ResetPassword