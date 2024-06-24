import ArticleSubtitle from "@/lib/components/article-subtitle";
import ArticleThumbnail from "@/lib/components/article-thumbnail";
import type { Article } from "@/lib/types/article";
import Link from "next/link";

export default function ArticleItem({
  slug,
  author,
  category,
  title,
  thumbnail,
}: Readonly<Article>) {
  return (
    <Link href={`/${slug}`}>
      <article className="flex flex-col">
        <ArticleThumbnail src={thumbnail} alt={title} />
        <div className="self-start mt-6">
          <ArticleSubtitle author={author} category={category} />
          <h2 className="mt-2 text-4xl tracking-tight text-neutral-900">
            {title}
          </h2>
        </div>
      </article>
    </Link>
  );
}
