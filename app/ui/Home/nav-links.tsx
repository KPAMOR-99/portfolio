import Link from "next/link";
import { BookOpen, Code, FileText, UserPlus } from "@deemlol/next-icons";

export default function NavLinks() {
  const navLinks = [
    { name: "notes", path: "/Home/notes" },
    { name: "blog", path: "/Home/blog" },
    { name: "projects", path: "/Home/projects" },
    { name: "about", path: "/Home/about" },
  ];

  return (
    <>
      <div className="flex gap-3">
        <Link
          key={navLinks[0].name}
          href={navLinks[0].path}
          className=" bold p-3 hover:text-blue-700 hover:bg-blue-300/25  rounded-lg"
        >
          <FileText size={24} color="#3d228aff" className="inline-block mr-2" />

          {navLinks[0].name}
        </Link>
        <Link
          key={navLinks[1].name}
          href={navLinks[1].path}
          className=" bold p-3 hover:text-blue-700 hover:bg-blue-300/25 rounded-lg"
        >
          <BookOpen
            size={24}
            color="#3d228aff"
            className="inline-block mr-2 bold"
          />

          {navLinks[1].name}
        </Link>
        <Link
          key={navLinks[2].name}
          href={navLinks[2].path}
          className=" bold p-3 hover:text-blue-700 hover:bg-blue-300/25 rounded-lg"
        >
          <Code
            size={24}
            color="#3d228aff"
            className="inline-block mr-2 bold"
          />

          {navLinks[2].name}
        </Link>
        <Link
          key={navLinks[3].name}
          href={navLinks[3].path}
          className=" bold p-3 hover:text-blue-700 hover:bg-blue-300/25 rounded-lg"
        >
          <UserPlus
            size={24}
            color="#3d228aff"
            className="inline-block mr-2 bold"
          />

          {navLinks[3].name}
        </Link>
      </div>
    </>
  );
}
