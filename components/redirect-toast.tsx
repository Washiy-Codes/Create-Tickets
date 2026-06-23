"use client"
import { toast } from "sonner";
import { deleteCookieByKey, getCookieByKey } from "./actions/cookies";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

const RedirectToast = ()=>{
   const pathname = usePathname();
   useEffect(()=>{
    const showCookieToast =  async () => {
        const toastMessage = await getCookieByKey("toast");
        if(toastMessage){
            toast.success(toastMessage);
            await deleteCookieByKey("toast");
        }
    }
    showCookieToast();
    }, [pathname]) 
    
    
    return null;
}

export {RedirectToast}