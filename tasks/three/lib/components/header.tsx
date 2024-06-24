"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

export default function Header() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const sort = searchParams.get("sort") ?? "new";
  const disableNav = pathname !== "/";

  return (
    <header className="flex">
      <nav
        className="flex gap-8 basis-5/12 items-center"
        style={{ visibility: disableNav ? "hidden" : "unset" }}
      >
        <Link
          className={`px-4 py-1.5 rounded-[10px] ${sort === "popular" ? "bg-[#FF5480] text-white" : ""}`}
          href={"/?sort=popular"}
        >
          Popular
        </Link>
        <Link
          className={`px-4 py-1.5 rounded-[10px] ${sort === "new" ? "bg-[#FF5480] text-white" : ""}`}
          href={"/?sort=new"}
        >
          New
        </Link>
      </nav>
      <div className="flex justify-center items-center basis-2/12">
        <Link href="/">
          <Image
            src="/bahram.svg"
            alt="Bahram logo"
            width={99}
            height={29}
            priority
          />
        </Link>
      </div>
      <div className="basis-5/12" />
    </header>
  );
}
