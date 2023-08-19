import React from "react";

import MainStrip from "./MainStrip";
import MasterNav from "./MasterNav";
import CategoryBar from "./CategoryBar";

function Navbar() {
  return (
    <nav className="w-full">
      <MainStrip />
      <MasterNav />
      <CategoryBar />
    </nav>
  );
}

export default Navbar;
