import React from "react";

import Navbar from "../components/Navbar";
import Breadcrumb from "../components/Breadcrumb";


export default function PDPPage() {
  return (
    <div className="flex flex-col justify-center">
      <Navbar />
      <Breadcrumb steps={[{ name: "Women" }, { name: "Shoes" }]} />
      <h1>PDP Page</h1>
    </div>
  );
}
