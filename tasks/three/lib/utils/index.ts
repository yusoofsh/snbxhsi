import type {
  ArticleItemResponse,
  ArticleListResponse,
} from "@/lib/types/article";
import type QueryParams from "@/lib/types/query-params";

const constructUrlArticleList = (params: QueryParams) => {
  const baseUrl = "https://hsi-sandbox.vercel.app/api/articles";
  const queryParams = new URLSearchParams();

  for (const key in params) {
    if (params[key] !== undefined) {
      queryParams.append(key, String(params[key]));
    }
  }

  return `${baseUrl}?${queryParams.toString()}`;
};

const constructUrlArticleItem = (slug: string) =>
  `https://hsi-sandbox.vercel.app/api/articles/${slug}`;

async function getArticleList(params: QueryParams) {
  const response = await fetch(constructUrlArticleList(params));

  if (!response.ok) {
    return null;
  }

  const { data: article } = (await response.json()) as ArticleListResponse;

  // console.log(article);

  return article;
}

async function getArticleItem(slug: string) {
  const response = await fetch(constructUrlArticleItem(slug));

  if (!response.ok) {
    return null;
  }

  const { data: article } = (await response.json()) as ArticleItemResponse;

  // console.log(article);

  return article;
}

export { constructUrlArticleList, getArticleItem, getArticleList };
