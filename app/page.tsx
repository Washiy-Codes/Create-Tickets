// import { Heading } from "@/components/heading";
// import Spinner from "@/components/spinner";
// import { TicketList } from "@/features/tickets/components/ticket-list";
// import { Suspense } from "react";
// import { SearchParams } from "nuqs/server";  
// import { searchParamsCache } from "@/features/tickets/search-params";


// const HomePage = async (searchParams: SearchParams) => {
//   console.log(searchParams)
//   const params = await searchParamsCache.parse(searchParams);
// return (
//   <>
    
//       <div className="flex flex-col gap-8">
//         <Heading title="All Tickets" description="All Tickets by everyone at one place" />
//         <Suspense fallback={<Spinner />}>
//             <TicketList searchParams={params} />
//           </Suspense>
//       </div>
    
//   </>
// )
// }

// export default HomePage;







import { Heading } from "@/components/heading";
import Spinner from "@/components/spinner";
import { TicketList } from "@/features/tickets/components/ticket-list";
import { Suspense } from "react";
import { searchParamsCache } from "@/features/tickets/search-params";
// ❌ REMOVED: import { SearchParams } from "nuqs/server"; 

// 1. Correct Next.js 15 runtime shape definition contract
type HomePageProps = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

// 2. Destructure searchParams explicitly inside the function signature wrapper
const HomePage = async ({ searchParams }: HomePageProps) => {
  
  // 3. Await the Next.js URL parameter promise layer cleanly first
  const resolvedSearchParams = await searchParams;
  
  // 4. Pass the synchronous, unwrapped keys down to your parsing cache instance
  const params = searchParamsCache.parse(resolvedSearchParams);
  
  return (
    <>
      <div className="flex flex-col gap-8">
        <Heading title="All Tickets" description="All Tickets by everyone at one place" />
        <Suspense fallback={<Spinner />}>
          <TicketList searchParams={params} />
        </Suspense>
      </div>
    </>
  );
};

export default HomePage;


