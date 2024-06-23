import Image from "next/image";
import Link from "next/link";

export default function Header({ sort }: Readonly<{ sort: string }>) {
  return (
    <header className="flex">
      <nav className="flex gap-8 basis-5/12 items-center">
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
        <Image
          src="/bahram.svg"
          alt="Bahram logo"
          width={99}
          height={29}
          priority
        />
      </div>
      <div className="basis-5/12" />
    </header>
  );
}
