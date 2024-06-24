import type SearchParams from "@/lib/types/search-params";
import Main from "@/lib/components/main";
import Header from "@/lib/components/header";

export default function Home({
  searchParams,
}: Readonly<{ searchParams: SearchParams }>) {
  const sort = searchParams.sort ?? "new";

  return (
    <>
      <Header />
      <Main sort={sort} />
    </>
  );
}
