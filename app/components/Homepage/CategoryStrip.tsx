import React from "react";

import CategoryBox from "./CategoryBox";

function CategoryStrip() {
  return (
    <div className="w-full flex flex-row justify-between">
      {[1, 2, 3, 4, 5].map((i) => (
        <CategoryBox name={`${i}`} key={i} selected={i === 1} />
      ))}
    </div>
  );
}

export default CategoryStrip;
