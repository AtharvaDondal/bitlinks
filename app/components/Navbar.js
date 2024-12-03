import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="h-14 px-3 bg-purple-700 flex justify-between items-center text-white">
      <div className="logo font-bold text-2xl">
        <Link href="/">Bitlinks</Link>
      </div>
      <ul className="flex justify-center items-center gap-4">
        <Link href="/">
          <li>Home</li>
        </Link>
        <Link href="/about">
          <li>About</li>
        </Link>
        <Link href="/shorten">
          <li>Shorten</li>
        </Link>
        <Link href="/contact">
          <li>Contact Us</li>
        </Link>
        <Link href="/generate">
          {" "}
          <li>
            {" "}
            <button className="p-3 py-1 font-bold rounded-lg bg-purple-500 shadow-lg border-l-white border">
              Try Now
            </button>{" "}
          </li>
        </Link>
        <Link href="/git">
          {" "}
          <li>
            <button className="p-3 py-1 font-bold rounded-lg bg-purple-500 shadow-lg border-l-white border">
              Github
            </button>
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
