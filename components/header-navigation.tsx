// 'use client'

// import Link from 'next/link'
// import { useSession, signOut } from 'next-auth/react'
// import { buttonVariants } from './ui/button'
// import { ticketsPath, signUpPath, signInPath, homePath } from '@/paths'
// import { LucideLogOut } from 'lucide-react'
// import { SubmitButton } from './form/submit-button'

// export function HeaderNavigation() {
//   const { data: session, status } = useSession()
//   const user = session?.user

//   if (status === 'loading') {
//     return <div className="w-16 animate-pulse h-9 bg-muted rounded-md" />
//   }

//   return !user ? (
//     <>
//       <Link href={signUpPath()} className={buttonVariants({ variant: "outline" })}>
//         Sign Up
//       </Link>
//       <Link href={signInPath()} className={buttonVariants({ variant: "default" })}>
//         Sign In
//       </Link>
//     </>
//   ) : (
//     <>
//       <Link href={ticketsPath()} className={buttonVariants({ variant: "default" })}>
//         Tickets
//       </Link>

//       <form
//         onSubmit={async (e) => {
//           e.preventDefault()
//           await signOut({ callbackUrl: homePath() })
//         }}
//       >
//         <SubmitButton label={"Sign Out"} icon={<LucideLogOut />} />
//       </form>
//     </>
//   )
// }