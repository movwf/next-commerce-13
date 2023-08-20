import React from "react";
import Link from "next/link";

function CategoryBar() {
  return (
    <div className="w-full h-10 flex items-center justify-center">
      <div className="w-4/5 flex flex-row justify-between border-gray-600 border-b-2">
        <Link href="#" className="py-2 px-4">
          Clothing
        </Link>
        <Link href="/women/shoes" className="py-2 px-4">
          Shoes
        </Link>
        <Link href="/women/beauty" className="py-2 px-4">
          Beauty
        </Link>
        <Link href="#" className="py-2 px-4">
          Jewelery
        </Link>
        <Link href="#" className="py-2 px-4">
          Gifts
        </Link>
      </div>
    </div>
  );
}

export default CategoryBar;
