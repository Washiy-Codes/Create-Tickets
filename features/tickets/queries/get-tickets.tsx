
// import  prisma  from "@/lib/prisma";
// import { ParsedSearchParams } from "../search-params";

// type GetTicketsProps = {
//   userId?: string;
//   searchParams: ParsedSearchParams;
// };

//   const getTickets = async ({ userId, searchParams }: GetTicketsProps) => {
//   const skip = searchParams.page * searchParams.size;
//   const take = searchParams.size;

//   const tickets = await prisma.ticket.findMany({
//     where: {
//       userId,

//       ...(searchParams.search && {
//         title: {
//           contains: searchParams.search,
//           mode: "insensitive",
//         },
//       }),
//     },

//     skip,
//     take,

//     orderBy: {
//       [searchParams.sortKey]: searchParams.sortValue,
//     },

//     include: {
//       user: {
//         select: {
//           username: true,
//         },
//       },
//     },
//   });
//   const totalCount = await prisma.ticket.count({
//     where
//     },
//   })
//   return { tickets, totalCount };
// };

// export { getTickets };



import  prisma  from "@/lib/prisma";
import { ParsedSearchParams } from "../search-params";

export const getTickets = async (
  userId: string | undefined,
  searchParams: ParsedSearchParams
) => {
  const where = {
    userId,
    title: {
      contains: searchParams.search,
      mode: "insensitive" as const,
    },
  };

  const skip = searchParams.page * searchParams.size;
  const take = searchParams.size;

 const [tickets, count] = await prisma.$transaction([
   prisma.ticket.findMany({
    where,
    skip,
    take,
    orderBy: {
      [searchParams.sortKey]: searchParams.sortValue,
    },
    include: {
      user: {
        select: {
          username: true,
        },
      },
    },
  }),
  prisma.ticket.count({
    where,
  }),
 ], {
  maxWait: 10000, // Time to wait for a connection slot (10s)
  timeout: 15000, // Maximum execution lifetime duration (15s)
 }
  )
  return {
    list: tickets,
    metadata: {
      count,
      hasNextPage: count > skip + take,
    },
  };
};












// const count = await prisma.ticket.count({
//     where,

//   });