import React from "react";
// import Image from "next/image";
import Link from "next/link";
import { BsTerminalFill } from "react-icons/bs";

export default function Page() {
  return (
    <main className="flex flex-col items-center gap-8 p-8">
      <div
        className="flex flex-col justify-start mt-10  w-[60%] gap-5 p-10 rounded-xl 
                      bg-blue-200/40 backdrop-blur-md border border-blue-300/50 shadow-md 
                      text-center text-black"
      >
        {/* <Image
          src="/profileIcon.svg"
          alt="random icon for my profile"
          width={100}
          height={100}
        /> */}
        <BsTerminalFill className="text-6xl" />

        <h1 className="text-5xl flex justify-start font-bold">
          Hi, I'm Kpamor
        </h1>
        <p className=" text-xl flex justify-start">
         im a developer. I like being logical and organized. I love minimalist designs and 
         I also teach Maths.
        </p>
      </div>

      <div className=" m-10 p-6 w-[60%] text-black">
        <div className="mb-10">
           <div className="flex items-center justify-start gap-5 mb-7">
          <div className="text-3xl m-2">Blogs</div>
          <Link href={"/blog"} className=" m-2 underline text-purple-500">
            see all
          </Link>
        </div>
        <p className="text-sm mb-5">some guidelnes and steps to what ive done</p>
        <div className="m-5">
            <ul className="list-disc list-outside">
              <li>working on an internship at seedbuilders innovation hub</li>
              <li>working as the speaker of the benues childrens parliament</li>
              <li>readng some self help books,lol</li>
              <li>building this site</li>
            </ul>
        </div>

        </div>
        <div className="mb-10">
           <div className="flex items-center justify-start gap-5 mb-7">
          <div className="text-3xl m-2">Blogs</div>
          <Link href={"/blog"} className=" m-2 underline text-purple-500">
            see all
          </Link>
        </div>
        <p className="text-sm mb-5">some guidelnes and steps to what ive done</p>
        <div className="m-5">
            <ul className="list-disc list-outside">
              <li>working on an internship at seedbuilders innovation hub</li>
              <li>working as the speaker of the benues childrens parliament</li>
              <li>readng some self help books,lol</li>
              <li>building this site</li>
            </ul>
        </div>

        </div>
        <div className="mb-10">
           <div className="flex items-center justify-start gap-5 mb-7">
          <div className="text-3xl m-2">Blogs</div>
          <Link href={"/blog"} className=" m-2 underline text-purple-500">
            see all
          </Link>
        </div>
        <p className="text-sm mb-5">some guidelnes and steps to what ive done</p>
        <div className="m-5">
            <ul className="list-disc list-outside">
              <li>working on an internship at seedbuilders innovation hub</li>
              <li>working as the speaker of the benues childrens parliament</li>
              <li>readng some self help books,lol</li>
              <li>building this site</li>
            </ul>
        </div>

        </div>
       
      </div>
    </main>
  );
}
