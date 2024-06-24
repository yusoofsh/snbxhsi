import type {
  Article,
  ArticleItemResponse,
  ArticleListResponse,
} from "@/lib/types/article";
import ArticleSubtitle from "@/lib/components/article-subtitle";
import ArticleThumbnail from "@/lib/components/article-thumbnail";
import Header from "@/lib/components/header";
import Link from "next/link";
import { constructUrlArticleList } from "@/lib/utils";
import { notFound } from "next/navigation";

async function getArticleRelated(
  categoryId: number,
  excludedArticleId: number
) {
  const response = await fetch(
    constructUrlArticleList({ categoryId, excludedArticleId, perPage: 2 })
  );

  if (!response.ok) {
    console.error("hehe", response.url);
    throw new Error("Failed to load");
  }

  const { data: article } = (await response.json()) as ArticleListResponse;

  // console.log(article);

  return article;
}

async function getArticle(slug: string) {
  const response = await fetch(
    `https://hsi-sandbox.vercel.app/api/articles/${slug}`
  );

  if (!response.ok) {
    return null;
  }

  const { data: article } = (await response.json()) as ArticleItemResponse;

  // console.log(article);

  return article;
}

export default async function ArticleDetail({
  slug,
}: Readonly<{ slug: string }>) {
  const article = await getArticle(slug);

  if (!article) {
    return notFound();
  }

  const { title, author, category, thumbnail, summary, content } = article;
  const articleRelated = await getArticleRelated(category.id, article.id);

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
        <div className="mt-24 flex flex-row justify-between">
          <h2 className="text-2xl text-[#111210]">You might also like...</h2>
          <Link href="/" className="hover:underline font-normal text-[#9B9B9B]">
            More
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10">
          {articleRelated.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
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
