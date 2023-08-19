import React from "react";

type Props = {
  steps: Record<string | "name", any>[];
};

function Breadcrumb({ steps }: Props) {
  return (
    <div className="h-8 w-full flex flex-row justify-center items-center my-2 bg-gray-600 text-sm">
      <div className="w-4/5">
      {steps.map(({ name }, idx) => (
        <span key={name}>
          <h2 className="float-left cursor-pointer hover:underline">{name}</h2>
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
