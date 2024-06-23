import ArticleListServer from "@/lib/components/article-list-server";
import ArticleListClient from "@/lib/components/article-list-client";

export default function Main({ sort }: Readonly<{ sort: string }>) {
  return (
    <main className="flex flex-col justify-center text-base mt-28 mx-24 gap-24 mb-16">
      <ArticleListServer sort={sort} />
      <ArticleListClient sort={sort} />
    </main>
  );
}
