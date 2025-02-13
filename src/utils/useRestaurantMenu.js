import { useState, useEffect } from "react";
import { MENU_URL } from "../utils/constants";

const useRestaurantMenu = (resId) => {
  const [resMenu, setResMenu] = useState(null);

  useEffect(() => {
    if (!resId) return;
    fetchData(resId);
  }, [resId]);

  const fetchData = async (resId) => {
    try {
      const data = await fetch(`${MENU_URL}${resId}`);
      const json = await data.json();
      setResMenu(json.data); 
    } catch (error) {
      console.error("Error in fetching menu:", error);
    }
  };

  return resMenu;
};

export default useRestaurantMenu;
