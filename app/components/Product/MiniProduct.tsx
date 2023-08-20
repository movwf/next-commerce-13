import React from "react";

type Props = {
  name: string;
};

function MiniProduct({ name }: Props) {
  return (
    <a className="h-64 flex justify-center" href="/shop-1234.html">
      {/* Product */}
      <div className="w-48 h-64 relative bg-white text-black flex flex-col">
        <div className="h-2/3 w-full bg-pink-600">image</div>
        <div className="w-full px-2 pt-2">
          <h3>Product - {name}</h3>
          <h4>Brand Name</h4>
          <h4>100 €</h4>
        </div>
        <div className="absolute h-[18px] w-[18px] border-2 rounded-full right-2 top-2 hover:bg-gray-400 cursor-pointer"></div>
      </div>
    </a>
  );
}

export default MiniProduct;
