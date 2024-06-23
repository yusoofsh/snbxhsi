import type { Response } from "@/lib/types/article";
import ArticleItem from "@/lib/components/article-item";
import type SearchParams from "@/lib/types/search-params";

async function getArticles({ sort }: SearchParams) {
  const response = await fetch(`https://hsi-sandbox.vercel.app/api/articles?sort=${sort || "new"}`);

  if (!response.ok) {
    throw new Error("Failed to fetch articles");
  }

  const articles = ((await response.json()) as Response).data;

  console.log(articles);

  return articles;
}

export default async function ArticleList({ sort }: SearchParams) {
  const articles = await getArticles({ sort });

  return (
    <div className="flex flex-col gap-24">
      {articles.map((article, index) => (
        <ArticleItem key={index} {...article} />
      ))}
    </div>
  )
}
