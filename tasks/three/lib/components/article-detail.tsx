import type { Article } from "@/lib/types/article";
import ArticleSubtitle from "@/lib/components/article-subtitle";
import ArticleThumbnail from "@/lib/components/article-thumbnail";
import Header from "@/lib/components/header";
import Link from "next/link";
import { getArticleItem, getArticleList } from "@/lib/utils";
import { notFound } from "next/navigation";

export default async function ArticleDetail({
  slug,
}: Readonly<{ slug: string }>) {
  const article = await getArticleItem(slug);

  if (!article) {
    return notFound();
  }

  const { title, author, category, thumbnail, summary, content } = article;

  const relatedArticles = await getArticleList({
    categoryId: category.id,
    excludedArticleId: article.id,
    perPage: 2,
  });

  return (
    <div className="mb-16">
      <div className="bg-white">
        <Header />
        <div className="pt-24 pb-16 px-48">
          <div className="flex flex-col gap-8">
            <h1 className="text-2xl text-[#4A4A4A] font-bold">{title}</h1>
            <p className="text-sm">{summary}</p>
            <ArticleSubtitle author={author} category={category} />
          </div>
        </div>
      </div>

      <div className="pt-16 px-48">
        <ArticleThumbnail src={thumbnail} alt={title} />
        <p className="mt-12 text-md font-normal text-[#4A4A4A]">{content}</p>
        {!relatedArticles ? null : (
          <>
            <div className="mt-24 flex flex-row justify-between">
              <h2 className="text-2xl text-[#111210]">
                You might also like...
              </h2>
              <Link
                href={`/${slug}/related`}
                className="hover:underline font-normal text-[#9B9B9B]"
              >
                More
              </Link>
            </div>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10">
              {relatedArticles.map(
                ({ id, slug, title, thumbnail, author, category, summary }) => (
                  <Link key={id} href={`/${slug}`}>
                    <div className="rounded-lg overflow-hidden">
                      <ArticleThumbnail
                        src={thumbnail}
                        alt={title}
                        className="h-64"
                      />
                      <ArticleSubtitle
                        author={author}
                        category={category}
                        className="mt-4"
                      />
                      <h1 className="text-2xl text-[#111210] font-semibold mt-4">
                        {title}
                      </h1>
                      <p className="text-[#9B9B9B] text-md font-normal mt-6">
                        {summary}
                      </p>
                    </div>
                  </Link>
                )
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

function ArticleCard({
  article: { slug, title, thumbnail, author, category, summary },
}: Readonly<{ article: Article }>) {
  return (
    <Link href={`/${slug}`}>
      <div className="rounded-lg overflow-hidden">
        <ArticleThumbnail src={thumbnail} alt={title} className="h-64" />
        <ArticleSubtitle author={author} category={category} className="mt-4" />
        <h1 className="text-2xl text-[#111210] font-semibold mt-4">{title}</h1>
        <p className="text-[#9B9B9B] text-md font-normal mt-6">{summary}</p>
      </div>
    </Link>
  );
}
