/* eslint-disable @next/next/no-img-element */
import React from "react";

import Navbar from "../../components/Navbar";
import Breadcrumb from "@/app/components/Breadcrumb";

// export const dynamicParams = false;

// // @ts-ignore
// export async function generateStaticParams(...args) {
//   console.log(args);

//   return Promise.resolve([{ category: "plum" }]);
// }

type Props = {
  params: {
    category: string;
  };
};

const PLPPage: React.FC<Props> = ({ params }) => {
  return (
    <div className="flex flex-col justify-center">
      <Navbar />
      <Breadcrumb
        steps={[
          { name: "Women", url: "/women" },
          { name: "Shoes", url: "/women/shoes" },
          {
            name: "Valentino Garavani Small Locò Jewel Logo Shoulder Bag in Leather",
            url: "/shop-1234.html",
          },
        ]}
      />

      <main className="w-full flex item-center justify-center">
        <div className="w-4/5">
          <section className="h-full w-full flex justify-center">
            <aside className="flex flex-col">
              <div className="max-h-[720px] h-full w-full">
                <img
                  src="/product-image-1.webp"
                  alt="Product Image"
                  className="h-full bg-white"
                />
              </div>
              <div className="h-32 w-full mt-1 flex flex-row">
                <img
                  src="/product-image-1.webp"
                  alt="Product Image"
                  className="h-full bg-white mr-1"
                />
                <img
                  src="/product-image-2.webp"
                  alt="Product Image"
                  className="h-full bg-white mr-1"
                />
                <img
                  src="/product-image-3.webp"
                  alt="Product Image"
                  className="h-full bg-white mr-1"
                />
              </div>
            </aside>
            <aside className="w-1/2">
              <div className="max-h-[720px] h-full w-full flex flex-col justify-between">
                <div>
                  <h1 className="text-3xl mt-2 font-serif">
                    Valentino Garavani
                  </h1>
                  <h2 className="text-lg mt-2">
                    Valentino Garavani Small Locò Jewel Logo Shoulder Bag in
                    Leather
                  </h2>
                  <h2 className="text-lg">1200 €</h2>
                </div>
                <div className="flex justify-end">
                  <a className="px-4 py-2 bg-orange-500 text-xl text-white font-bold rounded-lg">
                    Buy Now
                  </a>
                </div>
              </div>
              <div>-</div>
            </aside>
          </section>
          <pre>{JSON.stringify(params, null, 2)}</pre>
        </div>
      </main>
    </div>
  );
};

export default PLPPage;
