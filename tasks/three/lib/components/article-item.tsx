import type { Article } from "@/lib/types/article";
import Image from "next/image";

export default function ArticleItem({
  author,
  category,
  title,
  thumbnail,
}: Readonly<Article>) {
  return (
    <article className="flex flex-col">
      <Image
        priority
        src={thumbnail}
        alt={title}
        width={900}
        height={600}
        className="w-full rounded-lg"
      />
      <div className="self-start mt-6">
        <div className="flex gap-2 font-normal uppercase">
          <span className="text-neutral-400">By</span>
          <span className="text-black">{`${author.firstName} ${author.lastName}`}</span>
          <span className="text-neutral-400">In</span>
          <span className="text-black">{category.name}</span>
        </div>
        <h2 className="mt-2 text-4xl tracking-tight text-neutral-900">
          {title}
        </h2>
      </div>
    </article>
  );
}
