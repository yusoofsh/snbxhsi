import type SearchParams from "@/lib/types/search-params";
import Main from "@/lib/components/main";
import Header from "@/lib/components/header";

export default function Home({
  searchParams: { sort },
}: Readonly<{ searchParams: SearchParams }>) {
  return (
    <>
      <Header />
      <Main sort={sort} />
    </>
  );
}
