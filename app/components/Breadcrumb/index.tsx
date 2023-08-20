import React from "react";

type Props = {
  steps: Record<string | "name", any>[];
};

function Breadcrumb({ steps }: Props) {
  return (
    <div className="h-8 w-full flex flex-row justify-center items-center my-2 bg-gray-600 text-sm">
      <div className="w-4/5">
        {steps.map(({ name, url = "#" }, idx) => (
          <span key={name}>
            <a href={url} className="float-left cursor-pointer hover:underline">
              {name}
            </a>
            {idx !== steps.length - 1 && (
              <span className="float-left mx-2">{">"}</span>
            )}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Breadcrumb;
