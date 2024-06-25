import type { Article } from "@/lib/types/article";
import ArticleThumbnail from "@/lib/components/article-thumbnail";
import Link from "next/link";

export default function ArticleRelatedItem({
  slug,
  title,
  thumbnail,
  summary,
  index,
}: Readonly<Article & { index: number }>) {
  return (
    <Link href={`/${slug}`}>
      <article className="flex flex-row justify-between border rounded-lg bg-white gap-4">
        <div className="basis-1/2 p-8">
          <h2 className="text-2xl font-normal mb-2">{`0${index}`}</h2>
          <h3 className="text-xl font-semibold mb-4">{title}</h3>
          <p className="text-[#9B9B9B] font-normal text-sm">{summary}</p>
        </div>
        <div className="basis-1/2 ">
          <ArticleThumbnail
            src={thumbnail}
            alt={title}
            className="rounded-r-lg"
          />
        </div>
      </article>
    </Link>
  );
}
