"use client";

import type { Article, ArticleListResponse } from "@/lib/types/article";
import ArticleItem from "@/lib/components/article-item";
import useSWR from "swr";
import { useEffect, useState, useCallback, useRef, useMemo } from "react";
import { constructUrlArticleList } from "@/lib/utils";

const fetchArticles = (sort: string, page: number) => {
  return fetch(constructUrlArticleList({ sort, page }))
    .then((response) => response.json() as Promise<ArticleListResponse>)
    .then(({ data, meta }) => ({ data, meta }));
};

export default function ArticleListClient({
  sort,
}: Readonly<{ sort: string }>) {
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [articlesData, setArticlesData] = useState<Article[]>([]);
  const articlesDataRef = useRef(articlesData);

  const memoizedUrl = useMemo(
    () => (page !== 1 ? constructUrlArticleList({ sort, page }) : null),
    [sort, page]
  );

  const { data: articles, isLoading } = useSWR(memoizedUrl, () =>
    fetchArticles(sort, page)
  );

  const updateArticlesData = useCallback((newData: Article[]) => {
    setArticlesData((prevArticles) => {
      const updatedArticles = [...prevArticles, ...newData];
      articlesDataRef.current = updatedArticles;
      return updatedArticles;
    });
  }, []);

  const loadMoreArticles = useCallback(() => {
    setPage((prevPage) => prevPage + 1);
  }, []);

  useEffect(() => {
    if (articles?.data) {
      updateArticlesData(articles.data);
    }
  }, [articles, page, updateArticlesData]);

  useEffect(() => {
    if (articles?.meta.pagination.totalPages) {
      setTotalPages(articles.meta.pagination.totalPages);
    }
  }, [articles?.meta.pagination.totalPages]);

  return (
    <>
      {page !== 1
        ? articlesDataRef.current.map((article) => (
            <ArticleItem key={article.id} {...article} />
          ))
        : null}
      {page !== totalPages || isLoading ? (
        <button
          onClick={loadMoreArticles}
          disabled={isLoading}
          className="self-center px-9 py-3 text-xl text-[#FF5480] border-2 border-[#FF5480] border-solid rounded-full"
        >
          {isLoading ? "Loading..." : "Load more"}
        </button>
      ) : null}
    </>
  );
}
