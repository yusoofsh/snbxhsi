import type SearchParams from "@/lib/types/search-params";
import Header from "@/lib/components/header";
import Main from "@/lib/components/main";

export default function Home({
  searchParams,
}: Readonly<{ searchParams: SearchParams }>) {
  const sort = searchParams.sort ?? "new";

  return (
    <>
      <Header sort={sort} />
      <Main sort={sort} />
    </>
  );
}
