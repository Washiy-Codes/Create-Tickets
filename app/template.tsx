import { RedirectToast } from "@/components/redirect-toast";

type RootTemplate = {children: React.ReactNode}

export default function Template({children}: RootTemplate) {
  return (
    <>
    <div>{children}</div>
    <RedirectToast />
    </>
    
  )
              
}            
