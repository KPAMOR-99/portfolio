import { FaGithub, FaLinkedin, FaFacebook, FaReddit, FaRegCopyright } from "react-icons/fa";
import Link from "next/link";
import { FaSquareXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <>
      <div className=" mt-10 flex flex-col p-10 items-center justify-start  w-full shadow text-black border border-blue-300/60 bg-blue-200/40 backdrop-blur-md ">
        <div className="flex justify-start gap-2">
          <Link
            href={"https://github.com/KPAMOR-99"}
            className=" flex gap-2 items-center p-2 bg-blue-300 hover:bg-blue-300/25 rounded-lg"
          >
            <FaGithub />
            github
          </Link>
          <Link
            href={"https://facebook.com/KpamorCallistus"}
            className=" flex gap-2 items-center p-2 bg-blue-300 hover:bg-blue-300/25 rounded-lg"
          >
            <FaFacebook />
            facebook
          </Link>
          <Link
            href={"https://linkedin.com/in/kpamor123"}
            className=" flex gap-2 items-center p-2 bg-blue-300 hover:bg-blue-300/25 rounded-lg"
          >
            <FaLinkedin />
            linkedin
          </Link>
          <Link
            href={"https://www.reddit.com/u/kpamor/s/HhwJAQAtEh"}
            className=" flex gap-2 items-center p-2 bg-blue-300 hover:bg-blue-300/25 rounded-lg"
            target="_blank" rel="noopener noreferrer"
          >
            <FaReddit />
            reddit
          </Link>
          <Link
            href={"https://facebook.com/KpamorCallistus"}
            className=" flex gap-2 items-center p-2 bg-blue-300 hover:bg-blue-300/25 rounded-lg"
          >
            <FaSquareXTwitter /> X
          </Link>
        </div>
         <p className=" mt-8 text-s">Made by kpamor Callistus <FaRegCopyright className="inline" /> {new Date().getFullYear()}</p>
      </div>
     
    </>
  );
}
