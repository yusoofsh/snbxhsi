import ArticleItem from "@/lib/components/article-item";
import { getArticleList } from "@/lib/utils";
import { notFound } from "next/navigation";

export default async function ArticleListServer({
  sort,
}: Readonly<{ sort: string }>) {
  const articles = await getArticleList({ sort });

  if (!articles) {
    return notFound();
  }

  return articles.map((article) => (
    <ArticleItem key={article.id} {...article} />
  ));
}
