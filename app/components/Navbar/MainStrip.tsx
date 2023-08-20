"use client";

import { usePathname } from "next/navigation";

import React from "react";

const mainCategories = {
  women: { label: "Women", url: "/women" },
  men: { label: "Men", url: "/men" },
  kids: { label: "Kids", url: "/kids" },
};

type CategoryKey = keyof typeof mainCategories;

function MainStrip() {
  const path = usePathname();

  return (
    <div className="w-full h-10 bg-gray-500 text-white text-sm flex justify-center">
      <div className="w-[80%] h-full flex justify-between">
        <div className="h-full flex">
          {Object.keys(mainCategories).map((cat) => (
            <a
              key={cat}
              href={mainCategories[cat as CategoryKey].url}
            >
              <div
                className={`h-full flex items-center hover:bg-yellow-500 px-3 cursor-pointer ${
                  path.substring(1) === cat ? "bg-gray-400 text-black" : ""
                }`}
              >
                {mainCategories[cat as CategoryKey].label}
              </div>
            </a>
          ))}
        </div>
        <div className="h-full flex">
          <div className="h-full flex items-center px-2 cursor-pointer hover:bg-gray-700">
            Language
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(MainStrip);
