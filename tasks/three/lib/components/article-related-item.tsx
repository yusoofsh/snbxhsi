import type { Article } from "@/lib/types/article";
import ArticleThumbnail from "@/lib/components/article-thumbnail";
import Link from "next/link";

export default function ArticleRelatedItem({
  index,
  slug,
  title,
  thumbnail,
  summary,
}: Readonly<Article & { index: number }>) {
  return (
    <Link href={`/${slug}`}>
      <article className="flex flex-col">
        <div className="flex flex-col md:flex-row items-center my-4 p-4 border rounded-lg shadow-lg">
          <div className="md:w-1/2 p-2">
            <ArticleThumbnail
              src={thumbnail}
              alt={title}
              className="rounded-lg"
            />
          </div>
          <div className="md:w-1/2 p-2">
            <h2 className="text-2xl font-bold mb-2">{`0${index}`}</h2>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-700">{summary}</p>
          </div>
        </div>
        {/* <ArticleThumbnail src={thumbnail} alt={title} />
        <div className="self-start mt-6">
          <ArticleSubtitle author={author} category={category} />
          <h2 className="mt-2 text-4xl tracking-tight text-neutral-900">
            {title}
          </h2>
        </div> */}
      </article>
    </Link>
  );
}
