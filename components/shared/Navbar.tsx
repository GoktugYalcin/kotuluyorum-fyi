import React from "react";
import clsx from "clsx";
import Contentful from "@/lib/contentful";

export default async function Navbar() {
  const titleClasses = clsx(
    "text-2xl font-bold px-6 py-4 rounded-2xl bg-gray-300",
  );
  const navClasses = clsx(
    "cursor-pointer hover:bg-gradient-to-r from-gray-500 to-gray-400 bg-clip-text hover:text-xl transition-all",
  );

  return (
    <div className="w-full flex items-center justify-between px-72">
      <div className={titleClasses}>
        <span className="bg-clip-text bg-gradient-to-r from-gray-800 to-gray-600 text-transparent">
          Kötülüyorum.fyi
        </span>
      </div>
      <ul className="inline-flex gap-9 justify-center items-center px-6 py-4 rounded-2xl bg-gray-300">
        <li className={navClasses}>Anasayfa</li>
        <li className={navClasses}>Ayın en çok kötüleneni</li>
        <li className={navClasses}>Kategoriler</li>
      </ul>
    </div>
  );
}
