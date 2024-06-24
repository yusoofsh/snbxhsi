import ArticleDetail from "@/lib/components/article-detail";

export default function Page({
  params: { slug },
}: Readonly<{ params: { slug: string } }>) {
  return <ArticleDetail slug={slug} />;
}
