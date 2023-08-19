import React from "react";

function PriceFilter() {
  return (
    <>
      <div className="mt-4 grid gap-y-2">
        <h3 className="font-bold">Price</h3>

        <h4>Minimum Price</h4>
        <input className="w-[150px]" type="number" placeholder="10 $" />

        <h4>Maximum Price</h4>
        <input className="w-[150px]" type="number" placeholder="100 $" />
      </div>
    </>
  );
}

export default PriceFilter;
