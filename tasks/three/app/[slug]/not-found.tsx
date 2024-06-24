import Header from "@/lib/components/header";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mb-16">
      <div className="bg-white">
        <Header />
        <div className="pt-24 pb-16 px-48">
          <div className="flex flex-row flex-wrap">
            <h1 className="text-2xl text-[#4A4A4A] font-bold">
              404 Not Found. Click{" "}
              <Link href="/" className="hover:underline">
                here
              </Link>{" "}
              to go back to the homepage
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
