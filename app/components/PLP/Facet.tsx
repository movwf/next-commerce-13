import React from "react";

type Props = {
  name: string;
  options: { label: string }[];
};

function Facet({ name, options }: Props) {
  if (!options.length) return;

  return (
    <div className="mt-4">
      <h3 className="font-bold">{name}</h3>
      <ul className="flex flex-col">
        {options.map(({ label }) => (
          <span key={label} className="ml-2 mt-2 cursor-pointer hover:underline">
            {label}
          </span>
        ))}
      </ul>
    </div>
  );
}

export default Facet;
