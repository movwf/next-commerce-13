import React from "react";

import Footer from "@/app/components/Footer";
import Banner from "@/app/components/Homepage/Banner";
import ProductStrip from "@/app/components/Homepage/ProductStrip";
import CategoryStrip from "@/app/components/Homepage/CategoryStrip";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="flex flex-col justify-center">
      <Navbar />
      <main className="w-full flex item-center justify-center">
        <div className="w-4/5">
          <Banner />
          <CategoryStrip />

          <ProductStrip />
        </div>
      </main>
      <footer className="w-full bg-gray-800 py-4 mt-4">
        <Footer />
      </footer>
    </div>
  );
}
