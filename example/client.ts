import { PrismaClient } from "@prisma/client";
import { createAxiosClient as createAxiosClient } from "../src/axios-client";

const proxy = createAxiosClient<PrismaClient>({
  basePath: "http://localhost:3000",
  headers: {
    authorization: "ADMIN",
  },
});

async function main() {
  // posts to http://localhost:3000/post/findMany with body
  const posts = await proxy.post.findMany({
    where: {
      author: {
        email: "sarah@prisma.io",
      },
    },
  });
  console.log({ posts });
}

main().then(() => {});
