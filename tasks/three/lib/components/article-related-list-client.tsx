"use client";

import type { Article, ArticleListResponse } from "@/lib/types/article";
import useSWR from "swr";
import { useEffect, useState, useCallback, useRef, useMemo } from "react";
import { constructUrlArticleList } from "@/lib/utils";
import ArticleRelatedItem from "@/lib/components/article-related-item";

const fetchArticles = (
  page: number,
  excludedArticleId: number,
  categoryId: number
) => {
  return fetch(
    constructUrlArticleList({
      page,
      categoryId,
      excludedArticleId,
    })
  )
    .then((response) => response.json() as Promise<ArticleListResponse>)
    .then(({ data, meta }) => ({ data, meta }));
};

export default function ArticleRelatedListClient({
  id: excludedArticleId,
  category: { id: categoryId },
}: Readonly<Article>) {
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [articlesData, setArticlesData] = useState<Article[]>([]);
  const articlesDataRef = useRef(articlesData);

  const memoizedUrl = useMemo(
    () => (page !== 1 ? constructUrlArticleList({ page }) : null),
    [page]
  );

  const { data: articles, isLoading } = useSWR(memoizedUrl, () =>
    fetchArticles(page, excludedArticleId, categoryId)
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
      {page !== 1 && !isLoading ? (
        <div className="flex flex-col pt-8 px-48 gap-8">
          {articlesDataRef.current.map((article, index) => (
            <ArticleRelatedItem
              key={`${article.id}-${article.slug}`}
              index={index + 5}
              {...article}
            />
          ))}
        </div>
      ) : null}
      {page !== totalPages || isLoading ? (
        <div className="flex justify-center mt-20">
          <button
            onClick={loadMoreArticles}
            disabled={isLoading}
            className="self-center px-9 py-3 text-xl text-[#FF5480] border-2 border-[#FF5480] border-solid rounded-full"
          >
            {isLoading ? "Loading..." : "Load more"}
          </button>
        </div>
      ) : null}
    </>
  );
}
