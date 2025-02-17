import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
  //   let btnName = "login";

  const [btnName, setBtnName] = useState("Logout");
  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex justify-between px-8 border-b-2">
      <div>
        <img className="w-24" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex gap-6 items-center">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <li>Service</li>
          <li>About Us</li>
          <li>Cart</li>
          <li>{onlineStatus ? "🟢" : "🔴"} </li>
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
