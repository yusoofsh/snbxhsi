import type { Article } from "@/lib/types/article";

export default function ArticleSubtitle({
  author,
  category,
  className,
}: Readonly<{
  author: Article["author"];
  category: Article["category"];
  className?: string;
}>) {
  return (
    <div className={`flex gap-2 font-normal uppercase text-sm ${className}`}>
      <span className="text-neutral-400">By</span>
      <span className="text-black">{`${author.firstName} ${author.lastName}`}</span>
      <span className="text-neutral-400">In</span>
      <span className="text-black">{category.name}</span>
    </div>
  );
}
