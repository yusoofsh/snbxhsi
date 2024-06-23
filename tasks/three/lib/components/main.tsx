import ArticleListServer from "@/lib/components/article-list-server";
import ArticleListClient from "@/lib/components/article-list-client";

export default function Main({ sort }: Readonly<{ sort: string }>) {
  return (
    <main className="flex flex-col justify-center text-base mt-28 mx-24">
      <div className="flex flex-col gap-24">
        <ArticleListServer sort={sort} />
        <ArticleListClient sort={sort} />
      </div>
    </main>
  );
}
