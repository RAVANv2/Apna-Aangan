import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { BlackPillButton } from "../components/Buttons";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="font-custom font-bold">Apna Aangan</div>
        <div className="lg:hidden">
          <button
            className="navbar-burger flex items-center p-3"
            onClick={toggleMenu}
          >
            <img src="./icons/menu-icon.svg" alt="Menu" className="h-5" />
          </button>
        </div>
        <ul
          className={`hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6 ${
            menuOpen ? "" : "hidden"
          }`}
        >
          <Link to={"/"}>Home</Link>
          <Link to={"/about-us"}>About Us</Link>
          <Link>Our Vision</Link>
          <Link>CX</Link>
          <Link>VOC's</Link>
          <Link>Contact Us</Link>
        </ul>
        <a>
          <BlackPillButton>Sign In</BlackPillButton>
        </a>
      </nav>
      <div className={`navbar-menu relative z-50 ${menuOpen ? "" : "hidden"}`}>
        <div
          className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"
          onClick={closeMenu}
        ></div>
        <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-7 px-12 bg-theme-beige border-r overflow-y-auto">
          <div className="flex items-center mb-8">
            <div className="mr-auto font-custom font-bold">Apna Aangan</div>
            <button className="navbar-close" onClick={closeMenu}>
              <img src="./icons/close-icon.svg" alt="Close"></img>
            </button>
          </div>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Our Vision</li>
            <li>CX</li>
            <li>VOC's</li>
            <li>Contact Us</li>
          </ul>
          <div className="mt-auto">
              <a>
                <BlackPillButton>Sign In</BlackPillButton>
              </a>
            <p className="my-4 text-xs text-center text-gray-400">
              <span>Copyright © 2021</span>
            </p>
          </div>
        </nav>
      </div>
      <img src="./icons/line.svg" alt="Line" className="w-full h-[3px]" />
    </div>
  );
};

export default Navbar;
