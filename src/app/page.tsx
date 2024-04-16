import { db } from "~/server/db";

export const dynamic = "force-dynamic";

const mockUrls = [
  "https://utfs.io/f/599ca967-dba2-4abe-9aef-18cce3650bbb-1mnref.jpg",
  "https://utfs.io/f/ba9bcbcd-da41-4b12-8a55-e1e6059a17b0-1mnree.jpg",
  "https://utfs.io/f/3709ff96-6205-4a4f-8c8d-03ad51d825c7-1mnreg.jpg",
  "https://utfs.io/f/4b069c68-c14b-46d7-8de9-e1467a82f348-1mnreh.jpg",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();

  // console.log(posts);

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div>{post.name}</div>
        ))}
        {[...mockImages, ...mockImages, ...mockImages].map((image, index) => (
          <div key={image.id + "-" + index} className="w-48">
            <img src={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
}
