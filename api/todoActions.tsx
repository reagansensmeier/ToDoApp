"use server"

import { revalidatePath } from "next/cache"
import {prisma} from "../lib/prisma"


// Example prisma call
// export const getStaticProps: GetStaticProps = async () => {
//   const feed = await prisma.post.findMany({
//     where: { published: true },
//     include: {
//       author: {
//         select: { name: true },
//       },
//     },
//   });
//   return {
//     props: { feed },
//     revalidate: 10,
//   };
// };v

