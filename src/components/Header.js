import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
const Header = () => {
  //   let btnName = "login";

  const [btnName, setBtnName] = useState("Logout");

  return (
    <div className="flex justify-between px-8 border-b-2">
      <div>
        <img className="w-24" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex gap-6 items-center">
          <li>Home</li>
          <li>Service</li>
          <li>About Us</li>
          <li>Cart</li>
          <button
            className="border px-4 py-1 rounded-md"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
