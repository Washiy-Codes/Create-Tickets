import Link from 'next/link'
import { buttonVariants } from './ui/button'
import { homePath, ticketsPath, signUpPath, signInPath } from '@/paths'
import { LucideKanban, LucideLogOut } from 'lucide-react'
import { ThemeSwitcher } from './theme/theme-switcher'
import { signOut } from '@/auth'
import { SubmitButton } from './form/submit-button'
import { auth } from '@/auth'

const Header = async() => {
  const session =  await auth()
  const user = session?.user

  const navigation = (
    user ? (
      <>
      <Link href={ticketsPath()} className={buttonVariants({variant:"default"})}>
              Tickets
        </Link>
        <form action={async () => {
          'use server';
          await signOut({ redirectTo: homePath() })
        }}>
          <SubmitButton label={"Sign Out"} icon={<LucideLogOut />} />
        </form>
      </>
    ): (
    <>
       
        <Link href={signUpPath()} className={buttonVariants({variant:"outline"})}>
              Sign Up
        </Link>
        <Link href={signInPath()} className={buttonVariants({variant:"default"})}>
              Sign In
        </Link>      
    </>
  )
  )
  return (
    <nav className="
          flex justify-between py-2.5 px-5
           border-b w-full fixed left-0 right-0 top-0 z-20
         supports-backdrop-blur:bg-background/80 backdrop-blur-sm">
          <div>
        <Link href={homePath()} className={buttonVariants({variant:"ghost"})}>
             <LucideKanban />
             <h1 className="text-lg ml-2 font-bold">TicketBounty</h1>
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <ThemeSwitcher />
            {navigation}
            </div>
        </nav>
  )
}

export { Header }




// import Link from 'next/link'
// import { buttonVariants } from './ui/button'
// import { homePath } from '@/paths'
// import { LucideKanban } from 'lucide-react'
// import { ThemeSwitcher } from './theme/theme-switcher'
// import { HeaderNavigation } from './header-navigation' 

// const Header = () => {
//   return (
//     <nav className="
//       flex justify-between py-2.5 px-5
//       border-b w-full fixed left-0 right-0 top-0 z-20
//       supports-backdrop-blur:bg-background/80 backdrop-blur-sm" >
//       <div>
//         <Link href={homePath()} className={buttonVariants({ variant: "ghost" })}>
//           <LucideKanban />
//           <h1 className="text-lg ml-2 font-bold">TicketBounty</h1>
//         </Link>
//       </div>
//       <div className="flex items-center gap-2">
//         <ThemeSwitcher />
//         <HeaderNavigation /> 
//       </div>
//     </nav>
//   )
// }

// export { Header }

