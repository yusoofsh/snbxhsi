import ArticleItem from "@/lib/components/article-item";
import type { ArticleListResponse } from "@/lib/types/article";

async function getArticles(sort: string) {
  const response = await fetch(
    `https://hsi-sandbox.vercel.app/api/articles?sort=${sort}`
  );

  if (!response.ok) {
    throw new Error("Failed to load");
  }

  const { data, meta } = (await response.json()) as ArticleListResponse;

  // console.log(articles);

  return { data, meta };
}

export default async function ArticleListServer({
  sort,
}: Readonly<{ sort: string }>) {
  const articles = await getArticles(sort);

  return articles.data.map((article) => (
    <ArticleItem key={article.id} {...article} />
  ));
}
