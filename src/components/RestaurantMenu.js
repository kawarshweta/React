import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [resMenu, setResMenu] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    if (!resId) return;
    fetchData(resId);
  }, [resId]);

  const fetchData = async (restaurantId) => {
    try {
      const response = await fetch(
        `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.1160966&lng=72.9977486&restaurantId=${restaurantId}`
      );
      const json = await response.json();
      setResMenu(json.data);
    } catch (error) {
      console.error("Error fetching menu:", error);
    }
  };

  if (!resMenu) {
    return <h2>Loading...</h2>; // Prevents accessing undefined properties
  }

  const {
    cuisines = [],
    costForTwoMessage,
    locality,
  } = resMenu?.cards?.[2]?.card?.card?.info || {};

      const menuItem =
      resMenu?.cards
        ?.find((card) => card?.groupedCard?.cardGroupMap?.REGULAR)
        ?.groupedCard?.cardGroupMap?.REGULAR?.cards
        ?.find((c) => c?.card?.card?.itemCards)?.card?.card?.itemCards || [];

        console.log(menuItem)
  
  return (
    <div>
      <h1 className="text-2xl font-semibold">{cuisines.join()}</h1>
      <div className="flex gap-6 font-bold">
        <h2>{costForTwoMessage}</h2>
        <p>{locality}</p>
      </div>
      <div>
        <ul>
          <h2 className="text-2xl font-semibold mt-2">Menus</h2>
          {menuItem.map((item) => (
            <li key={item?.card?.info?.id}>
              {item?.card?.info?.name} - {item?.card?.info?.defaultPrice}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
