import ArticleRelatedItem from "@/lib/components/article-related-item";
import ArticleRelatedListClient from "@/lib/components/article-related-list-client";
import ArticleThumbnail from "@/lib/components/article-thumbnail";
import Header from "@/lib/components/header";
import { getArticleItem, getArticleList } from "@/lib/utils";
import { notFound } from "next/navigation";

export default async function ArticleRelatedList({
  slug,
}: Readonly<{ slug: string }>) {
  const article = await getArticleItem(slug);

  if (!article) {
    return notFound();
  }

  const {
    id: excludedArticleId,
    title,
    category: { id: categoryId },
    thumbnail,
    summary,
  } = article;

  const relatedArticles = await getArticleList({
    categoryId,
    excludedArticleId,
  });

  return (
    <div className="mb-16">
      <div className="bg-white">
        <Header />
        <div className="pt-24 pb-16 px-48">
          <div className="flex flex-col gap-8">
            <h2 className="text-2xl text-[#111210]">Related Post List</h2>
            <div className="flex flex-row gap-6">
              <ArticleThumbnail
                src={thumbnail}
                alt={title}
                className="aspect-w-6 aspect-h-7 w-[196px] h-[196px] rounded-lg"
              />
              <div className="flex flex-col gap-4">
                <h1 className="text-2xl text-[#4A4A4A] font-bold">{title}</h1>
                <p className="text-sm text-black">{summary}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {!relatedArticles ? null : (
        <>
          <div className="flex flex-col pt-16 px-48 gap-8">
            {relatedArticles.map((article, index) => (
              <ArticleRelatedItem
                key={`${article.id}-${article.slug}`}
                index={index + 1}
                {...article}
              />
            ))}
          </div>
          <ArticleRelatedListClient {...article} />
        </>
      )}
    </div>
  );
}
