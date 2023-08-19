import React from "react";

import Navbar from "../components/Navbar";

// export const dynamicParams = false;

// // @ts-ignore
// export async function generateStaticParams(...args) {
//   console.log(args);

//   return Promise.resolve([{ category: "plum" }]);
// }

type Props = {
  params: {
    mainCategory: string;
  };
};

const PLPPage: React.FC<Props> = ({ params }) => {
  return (
    <div className="flex flex-col justify-center">
      <Navbar />

      <div className="w-full h-[600px] flex items-center justify-center">
        <p>Not necessary main category page - {params.mainCategory}</p>
      </div>
    </div>
  );
};

export default PLPPage;
