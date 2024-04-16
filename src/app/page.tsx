import getMyImages from "~/server/queries";
import Image from "next/image";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const images = await getMyImages();

  return (
    <main className="">
      <div className="flex flex-wrap justify-center gap-4">
        {images.map((image) => (
          <div key={image.id} className="flex w-48 flex-col ">
            <Image src={image.url} alt={image.name} width={200} height={200} />
            <div>{image.name}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
