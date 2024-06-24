import type SearchParams from "@/lib/types/search-params";
import Main from "@/lib/components/main";

export default function Home({
  searchParams,
}: Readonly<{ searchParams: SearchParams }>) {
  const sort = searchParams.sort ?? "new";

  return <Main sort={sort} />;
}
