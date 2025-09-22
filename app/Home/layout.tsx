import React from "react";
import Header from "../ui/Home/Header";
import { roboto } from "../ui/fonts";
import Footer from "../ui/Home/Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${roboto.className} min-h-screen bg-blue-50 text-l`}>
     
      <div className="fixed top-0 left-0 w-full bg-blue-200/50 backdrop-blur-md border-b border-blue-300/50 shadow-md z-50">
        <Header />
      </div>

    
      <div className={` pt-20`}>{children}</div>

      <div>
        <Footer/>
      </div>
    </div>
  );
}
