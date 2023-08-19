import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="w-4/5 flex items-center justify-between">
        <div className="flex flex-row justify-end items-end">
          <div className="flex flex-col">
            <label htmlFor="email" className="text-white mr-2">
              Subscribe to our newsletter:
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="bg-gray-900 text-white px-4 py-2 rounded-l focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-r">
            Submit
          </button>
        </div>
        <div className="flex items-center space-x-4">
          <a
            href="#"
            className="text-white hover:text-blue-400 transition duration-300"
          >
            <svg
              className="h-6 w-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Replace the 'facebook' icon with the appropriate icon */}
              <path d="M13 5H9v2h2.26C10.84 8.45 10 9.62 10 11c0 1.66 1.34 3 3 3s3-1.34 3-3c0-.88-.38-1.67-.98-2.24l1.5-1.5C16.62 7.44 17 8.18 17 9c0 1.66-1.34 3-3 3s-3-1.34-3-3V5H8V3h2V1h2v2h1z" />
            </svg>
          </a>
          <a
            href="#"
            className="text-white hover:text-blue-400 transition duration-300"
          >
            <svg
              className="h-6 w-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Replace the 'twitter' icon with the appropriate icon */}
              <path d="M23 4.3c-.8.4-1.6.7-2.4.9.9-.5 1.6-1.3 1.9-2.3-.8.5-1.7.8-2.7 1-2-.8-3.5-2.8-3.5-5.3 0-1.2.3-2.3.9-3.2C15.3.6 14.6.3 13.8.3c-.9 0-1.8.3-2.5.9-.7.6-1.2 1.4-1.4 2.4-.3-.1-.7-.2-1.1-.2-1.6 0-3 .6-4.1 1.6C4.1 4.3 3.9 5 3.9 5.7c0 .8.2 1.5.5 2.1C2.7 7.7 1.6 7 1.1 6c-.3.6-.4 1.2-.4 1.8 0 2.6 2 4.8 4.7 5.3-.5.1-1 .2-1.5.2-.4 0-.7 0-1.1-.1C3 14 4.3 15 5.8 15c-.4.1-.7.1-1.1.1-.2 0-.5 0-.7-.1.5 1.4 1.8 2.4 3.3 2.4C5.3 17.5 4 18 2.7 18c-.2 0-.4 0-.6-.1 1.6 1 3.6 1.6 5.6 1.6 6.7 0 10.4-5.6 10.4-10.4 0-.2 0-.5 0-.7.7-.5 1.3-1.2 1.8-1.9z" />
            </svg>
          </a>
          {/* Add more social media icons here */}
        </div>
      </div>
      <hr className="w-4/5 h-2 mt-8 mb-4" />
      <div className="w-4/5 flex flex-row">
        <ul className="w-1/4">
          <h3 className="font-bold">Top Categories</h3>
          {["Clothing", "Shoes", "Bags", "Beauty"].map((l) => (
            <li key={l} className="my-2 hover:underline">
              <Link href="#">{l}</Link>
            </li>
          ))}
        </ul>
        <ul className="w-1/4">
          <h3 className="font-bold">Customer Care</h3>
          {["Contact Us", "FAQ", "Payment", "Track Order"].map((l) => (
            <li key={l} className="my-2 hover:underline">
              <Link href="#">{l}</Link>
            </li>
          ))}
        </ul>
      </div>
      <hr className="w-4/5 h-2 my-4" />

      <div className="w-4/5 flex flex-row justify-end">
        E-Commerce LLC. 2023
      </div>
    </div>
  );
}

export default Footer;
