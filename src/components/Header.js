import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { LOGO_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  const [btnName, setBtnName] = useState("Logout");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const onlineStatus = useOnlineStatus();
  const cartItems = useSelector((store) => store.cart.items);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex justify-between items-center px-4 sm:px-8 border-b-2 bg-white shadow-sm relative z-20 sticky top-0">
      {/* Logo */}
      <div className="flex items-center">
        <Link to="/">
          <img
            className="w-14 sm:w-20 md:w-24 h-auto"
            src={LOGO_URL}
            alt="Logo"
          />
        </Link>
      </div>

      {/* Hamburger Button (Mobile Only) */}
      <button
        className="sm:hidden text-2xl focus:outline-none p-2 rounded-full hover:bg-gray-100 transition-colors"
        onClick={toggleMenu}
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        aria-expanded={isMenuOpen}
      >
        {isMenuOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {/* Overlay (Mobile Only, Visible When Menu Open) */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 sm:hidden transition-opacity duration-300 z-10"
          onClick={toggleMenu}
        />
      )}

      {/* Navigation Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white sm:bg-transparent sm:static sm:h-auto sm:w-auto sm:flex flex-col sm:flex-row transform ${isMenuOpen ? "translate-x-0" : "translate-x-full"} sm:transform-none transition-transform duration-300 ease-in-out z-20 sm:items-center sm:gap-6 p-6 sm:p-0 shadow-lg sm:shadow-none`}
      >
        <ul className="flex flex-col sm:flex-row gap-4 sm:gap-6 text-base sm:text-base items-center">
          <li className="py-2 hover:bg-gray-100 sm:hover:bg-transparent rounded-md transition-colors">
            <Link to="/" onClick={() => setIsMenuOpen(false)} className="block px-4 sm:px-0">
              Home
            </Link>
          </li>
          <li className="py-2 hover:bg-gray-100 sm:hover:bg-transparent rounded-md transition-colors">
            <Link to="/about" onClick={() => setIsMenuOpen(false)} className="block px-4 sm:px-0">
              About
            </Link>
          </li>
          <li className="py-2 hover:bg-gray-100 sm:hover:bg-transparent rounded-md transition-colors">
            <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="block px-4 sm:px-0">
              Contact
            </Link>
          </li>
          {/* <li className="py-2 hover:bg-gray-100 sm:hover:bg-transparent rounded-md transition-colors">
            <span className="block px-4 sm:px-0">Service</span>
          </li> */}
          <li className="py-2 hover:bg-gray-100 sm:hover:bg-transparent rounded-md transition-colors">
            <span className="block px-4 sm:px-0">About Us</span>
          </li>
          <li className="py-2 font-bold hover:bg-gray-100 sm:hover:bg-transparent rounded-md transition-colors">
            <Link to="/cart" onClick={() => setIsMenuOpen(false)} className="block px-4 sm:px-0 relative">
              <FaShoppingCart className="text-xl" />
              <span className="absolute -top-3 -right-3 bg-red-600 text-white text-sm px-2 py-0.5 rounded-full">
                {cartItems.length}
              </span>
            </Link>
          </li>
          {/* <li className="py-2 hover:bg-gray-100 sm:hover:bg-transparent rounded-md transition-colors">
            <span className="block px-4 sm:px-0">{onlineStatus ? "🟢" : "🔴"}</span>
          </li> */}
          <li className="py-2">
            <button
              className="border px-4 py-1 rounded-md text-base w-full text-left sm:w-auto sm:text-center hover:bg-gray-100 transition-colors"
              onClick={() => {
                setBtnName(btnName === "Login" ? "Logout" : "Login");
                setIsMenuOpen(false);
              }}
            >
              {btnName}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;