import {ThemeProvider} from '@teispace/next-themes'
import { SessionProvider } from "next-auth/react";


type ThemeProviderWrapperProps = {
    children: React.ReactNode;
}

const ThemeProviderWrapper = ({children}: ThemeProviderWrapperProps) => {
    return (
        <SessionProvider refetchOnWindowFocus={true} refetchInterval={0}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {children}
        </ThemeProvider>
        </SessionProvider>
    )
}
export {ThemeProviderWrapper}