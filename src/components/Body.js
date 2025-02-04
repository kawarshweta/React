import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [topRestaurants, setTopRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  },[]);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.1160966&lng=72.9977486&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    // console.log(json)
    setTopRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return topRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      <input
        className="border-2 p-3 rounded-md my-4 mx-6"
        type="text"
        placeholder="Search..."
      />
      <button 
       className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-2 rounded-md"
        onClick={() => {
          const filteredRestaurants = topRestaurants.filter(
            (restaurant) => parseFloat(restaurant?.info?.avgRatingString) > 4.4
          );
          setTopRestaurants(filteredRestaurants);
          console.log(filteredRestaurants)
          console.log(topRestaurants)
        }}
      >
        Top Rated Restaurants
      </button>
      <div className="flex flex-wrap justify-center">
        {topRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} restData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
