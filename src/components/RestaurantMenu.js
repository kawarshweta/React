import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategories from "./RestaurantCategories";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resMenu = useRestaurantMenu(resId);

  if (!resMenu) {
    return <h2>Loading...</h2>; // Prevents accessing undefined properties
  }

  const {
    cuisines = [],
    costForTwoMessage,
    locality,
    name,
  } = resMenu?.cards?.[2]?.card?.card?.info || {};

  const menuItem =
    resMenu?.cards
      ?.find((card) => card?.groupedCard?.cardGroupMap?.REGULAR)
      ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.find(
        (c) => c?.card?.card?.itemCards
      )?.card?.card?.itemCards || [];
    
    // const RestaurantCategories = resMenu?.cards?.find((card) => card?.groupedCard?.cardGroupMap?.REGULAR)?.groupedCard?.cardGroupMap?.REGULAR?.cards
    // console.log("menu-item", RestaurantCategories);

    const categories = resMenu?.cards?.find((card) => card?.groupedCard?.cardGroupMap?.REGULAR)?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    // console.log("categories", categories);

  return (
    <div className="text-center">
      <h1 className="text-2xl font-semibold">{name}</h1>
      <div className="gap-6 font-bold">
        <h2>{costForTwoMessage} <span>{locality}</span> </h2>
        <p>{cuisines.join()}</p>
      </div>
      {/* <div>
        <ul>
          <h2 className="text-2xl font-semibold mt-2">Menus</h2>
          {menuItem.map((item) => (
            <li key={item?.card?.info?.id}>
              {item?.card?.info?.name} - {item?.card?.info?.defaultPrice}
            </li>
          ))}
        </ul>
      </div> */}

      {/* accordion categories  */}
      {categories.map((Category) =>{
        return(
          <RestaurantCategories
           data = {Category?.card?.card}
          />
        )
      })}
      
    </div>
  );
};

export default RestaurantMenu;
