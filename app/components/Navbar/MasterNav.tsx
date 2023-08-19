import React from "react";
import Image from "next/image";

function MasterNav() {
  return (
    <div className="w-full flex items-center justify-center">
      <div className="w-4/5 bg-black py-4 flex justify-between items-center text-white">
        <div className="px-4">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-3 py-2 bg-gray-800 rounded-lg text-white"
          />
        </div>
        <div className="flex items-center justify-center">
          {/* Add your logo content here */}
          <Image
            src="/next.svg"
            alt="Logo"
            height="200"
            width="300"
            className="bg-white p-2"
          />
        </div>
        <div className="flex h-10 justify-end space-x-4">
          {/* Add your account-related buttons here */}
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg">
            Login
          </button>
          <button className="px-4 py-2 bg-green-500 text-white rounded-lg">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}

export default MasterNav;
