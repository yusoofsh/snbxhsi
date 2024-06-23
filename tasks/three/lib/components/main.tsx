import type SearchParams from "@/lib/types/search-params";
import ArticleList from "@/lib/components/article-list";
import { Suspense } from "react";

export default function Main({ sort }: SearchParams) {
  return (
    <main className="flex flex-col justify-center text-base mt-28 mx-16">
      <Suspense fallback={<h1>Loading</h1>}>
        <ArticleList sort={sort} />
      </Suspense>
      <button className="self-center px-9 py-3 mt-48 text-xl text-[#FF5480] border-2 border-[#FF5480] border-solid rounded-full">
        Load More
      </button>
    </main >
  );
}
