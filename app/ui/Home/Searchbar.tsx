import Link from "next/link";

export default function Searchbar({text}:{text:string}) {
  return (
    <div className="flex items-center w-72 border border-blue-300/50 text-black 
                    bg-blue-200/40 backdrop-blur-md rounded-lg shadow-sm">
      <input
        type="text"
        placeholder={text}
        className="flex-1 px-3 py-2 bg-transparent outline-none 
                   text-sm text-black"
      />
      <Link
        href="#"
        className="px-4 py-2 border-l border-blue-300/50 
                   text-sm text-black hover:bg-blue-300/30 
                   transition-colors rounded-r-lg"
      >
        Go
      </Link>
    </div>
  );
}
