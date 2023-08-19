import React from "react";

import MiniProduct from "../Product/MiniProduct";

function ProductStrip() {
  return (
    <div className="w-full flex flex-row justify-between my-8">
      {[1, 2, 3, 4].map((i) => (
        <MiniProduct key={i} name={`${i}`} />
      ))}
    </div>
  );
}

export default ProductStrip;
