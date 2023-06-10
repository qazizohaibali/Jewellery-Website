import React from "react";
import { BiSearchAlt } from "react-icons/bi";
import { AiFillHeart } from "react-icons/ai";
import { MdShoppingCart } from "react-icons/md";
import { ImLocation2 } from "react-icons/im";
import { FaUserAlt } from "react-icons/fa";
import "../Components/navbar.css";

export default function Navbar() {
  return (
    <>
      <div className="max-w-[1440px]  mx-auto">
        <div className="h-7 flex px-2 bg-[#5cf3e4] justify-between items-center ">
          <p>
            Sparkle and Shine: Discover Exquisite Jewellery Treasures,
            Handcrafted with Love and Elegance
          </p>
          <p> | Call us at +1 (555) 123-4567</p>{" "}
        </div>
        <nav className="navbar mx-auto navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand title" href="/">
              <h2>
                TIFFANY & <span className="text-[#5cf3e4] font-bold">CO</span>{" "}
              </h2>
            </a>
            <ul className="flex gap-x-2 ">
              <li className="flex justify-center items-center h-6 w-6 bg-[#f8f9fa] rounded-lg">
                <BiSearchAlt />
              </li>
              <li className="flex justify-center items-center h-6 w-6 bg-[#f8f9fa] rounded-lg">
                <AiFillHeart />
              </li>
              <li className="flex justify-center items-center h-6 w-6 bg-[#f8f9fa] rounded-lg">
                <MdShoppingCart />
              </li>
              <li className="flex justify-center items-center h-6 w-6 bg-[#f8f9fa] rounded-lg">
                <ImLocation2 />
              </li>
              <li className="flex justify-center items-center h-6 w-6 bg-[#f8f9fa] rounded-lg">
                <FaUserAlt />
              </li>
            </ul>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
        </nav>
        <hr className="bg-[#5cf3e4] mx-2" />
        <hr className="bg-[#5cf3e4] mx-2" />
        <div className="pt-3">
          <ul className="flex justify-center items-center gap-x-10">
            <li >
              <a href="/" className="nav_items">Jewelry</a>
            </li>
            <li>
              <a href="/" className="nav_items"> Gifts</a>
            </li>
            <li>
              <a href="/" className="nav_items">Love & Engagement</a>
            </li>
            <li>
              <a href="/" className="nav_items">Fine Watches</a>
            </li>
            <li>
              <a href="/" className="nav_items">Home & Accessories</a>
            </li>
            <li>
              <a href="/" className="nav_items">Fragrance</a>
            </li>
            <li>
              <a href="/" className="nav_items">Men’s</a>
            </li>
            <li>
              <a href="/" className="nav_items">Stories</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
