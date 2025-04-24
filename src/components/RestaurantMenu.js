import { useParams } from "react-router-dom";
import { useState } from "react";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategories from "./RestaurantCategories";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resMenu = useRestaurantMenu(resId);
  const[showItems, setShowItems] = useState(false);
  const[showIndex, setShowIndex] = useState(0)

  const handlClick = () =>{
    console.log("click")
    setShowItems(!showItems)  
  }

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

  return (
    <div className="text-center">
      <h1 className="text-2xl font-semibold">{name}</h1>
      <div className="gap-6 font-bold">
        <h2>{costForTwoMessage} <span>{locality}</span> </h2>
        <p>{cuisines.join()}</p>
      </div>

      {/* accordion categories  */}
      {categories.map((Category, index) =>{
        return(
          // controlled component 
          <RestaurantCategories
           key={Category?.card?.card?.categoryId}
           data = {Category?.card?.card}
           showItems={index == showIndex ? true : false}
           setShowIndex={() =>setShowIndex(index)}
          />
        )
      })}
      
    </div>
  );
};

export default RestaurantMenu;
