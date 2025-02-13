import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resMenu = useRestaurantMenu(resId)

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
