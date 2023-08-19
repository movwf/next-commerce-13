import React from "react";

import Navbar from "../../components/Navbar";

// export const dynamicParams = false;

// // @ts-ignore
// export async function generateStaticParams(...args) {
//   console.log(args);

//   return Promise.resolve([{ category: "plum" }]);
// }

type Props = {
  params: {
    category: string;
  }
}

const PLPPage: React.FC<Props> = ({ params }) => {
  return (
    <div className="flex flex-col justify-center">
      <Navbar />

      <h1>Product Page</h1>
      <pre>{JSON.stringify(params,null,2)}</pre>
    </div>
  );
}

export default PLPPage;
