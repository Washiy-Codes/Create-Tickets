import Link from "next/link";
import { Heading } from "@/components/heading";
import { auth } from "@/auth";
import { ticketsPath } from "@/paths";

const HomePage = async () => {

  // const session = await auth();
  // const user = session?.user;
  
return (
  <>
    
      <div className="flex flex-col gap-8">
        <Heading title="Homepage" description="Your homepage to start" />
        <div className="flex flex-col flex-1 items-center justify-center gap-4">
          <Link href={ticketsPath()} className="text-md underline">
            Go to Tickets Page
          </Link>
        </div>
      </div>
    
  </>
)
}

export default HomePage;
















//   return (
//     {user && (
//     <div className="flex flex-col gap-8">
//       <Heading title="Homepage" description="Your homepage to start" />
//       <div className="flex flex-col flex-1 items-center justify-center gap-4">
//         <Link href={ticketsPath()} className="text-md underline">
//           Go to Tickets Page
//       </Link>
//       </div>
      
//     </div>
//     )}
//   )
// };

