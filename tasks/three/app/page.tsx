import type SearchParams from "@/lib/types/search-params";
import Header from "@/lib/components/header";
import Main from "@/lib/components/main";

export default function Home({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const { sort } = searchParams;

  return (
    <>
      <Header sort={sort} />
      <Main sort={sort} />
    </>
  );
}
