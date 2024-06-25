import ArticleRelatedList from "@/lib/components/article-related-list";

export default function Page({
  params: { slug },
}: Readonly<{ params: { slug: string } }>) {
  return <ArticleRelatedList slug={slug} />;
}
