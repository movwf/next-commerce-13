import React from "react";

type Props = {
  name: string;
  selected?: boolean;
};

function CategoryBox({ name, selected }: Props) {
  return (
    <div
      key={name}
      className="w-1/5 h-56 flex flex-col justify-center items-center bg-white m-2 text-black relative hover:opacity-2"
    >
      <span>Category - {name}</span>
      {selected && (
        <div className="w-full h-24 absolute flex justify-center pt-2 z-10 bottom-0 bg-gray-300">
          Most Wanted
        </div>
      )}
    </div>
  );
}

export default CategoryBox;
