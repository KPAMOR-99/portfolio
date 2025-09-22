import Link from "next/link";
import NavLinks from "./nav-links";
import Searchbar from "./Searchbar";

export default function Header() {
  return (
    <>
      <header className="p-3 flex items-center w-full bg-blue-200/10 backdrop-blur-md border-b border-blue-300/50 shadow text-black">
        <Link
          href={"/Home"}
          className="pr-1 mr-5 font-bold text-xl text-black hover:text-blue-700"
        >
          kpamor.dev
        </Link>

        <div className="flex items-center justify-between gap-10 flex-1">
          <Searchbar text="tye stuff here" />

          <div className="flex gap-5 items-center">
            <NavLinks />
            <div className="text-black">other icons</div>
          </div>
        </div>
      </header>
    </>
  );
}
