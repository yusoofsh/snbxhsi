interface MetaPagination {
  page: number;
  perPage: number;
  totalPages: number;
}

interface Meta {
  pagination: MetaPagination;
  sort: string;
  categoryId: number | null;
  excludedArticleId: number | null;
}

interface Category {
  id: number;
  name: string;
}

interface Author {
  id: number;
  firstName: string;
  middleName: string;
  lastName: string;
}

interface Article {
  id: number;
  category: Category;
  author: Author;
  thumbnail: string;
  slug: string;
  title: string;
  summary: string;
  content: string | undefined;
}

interface ArticleListResponse {
  meta: Meta;
  data: Article[];
}

interface ArticleItemResponse {
  data: Article;
}

export type { ArticleListResponse, ArticleItemResponse, Article };
