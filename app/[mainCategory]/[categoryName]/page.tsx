import React from "react";

import Navbar from "@/app/components/Navbar";
import Breadcrumb from "@/app/components/Breadcrumb";
import Facet from "@/app/components/PLP/Facet";
import PriceFilter from "@/app/components/PLP/PriceFilter";
import MiniProduct from "@/app/components/Product/MiniProduct";

function PLPPage() {
  return (
    <div className="flex flex-col justify-center items-center">
      <Navbar />
      <Breadcrumb steps={[{ name: "Women" }, { name: "Shoes" }]} />

      <div className="w-full flex justify-center">
        <div className="w-4/5 flex flex-row">
          {/* Filter */}
          <div className="w-1/4">
            <h3 className="text-2xl my-2">Filter By</h3>

            <Facet
              name="Category"
              options={[{ label: "Heels" }, { label: "Sandals" }]}
            />

            <Facet
              name="Colour"
              options={[{ label: "Red" }, { label: "Blue" }]}
            />

            <PriceFilter />

            <button className="my-4">Apply</button>
          </div>
          {/* Products */}
          <div className="w-3/4 my-2 flex flex-col">
            <h2 className="mb-4 text-2xl font-light">Shoes</h2>

            <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-y-8">
              {[1, 2, 3, 4, 5].map((i) => (
                <MiniProduct key={i} name={`${i}`} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PLPPage;
