import RestaurantCard from "./RestaurantCard";
import restObj from "../utils/dummydata";
import { useState } from "react";

const Body = () => {
  const restaurants = restObj[0].card.card.gridElements.infoWithStyle.restaurants;

  const [topRestaurants, setTopRestaurants] = useState(restaurants);


  return (
    <div>
      <input
        className="border-2 p-3 rounded-md my-4 mx-6"
        type="text"
        placeholder="Search..." 
      />
      <button
        onClick={() => {
          const filteredRestaurants = topRestaurants.filter(
            (restaurant) => parseFloat(restaurant?.info?.avgRatingString) > 4.2
            );
            setTopRestaurants(filteredRestaurants);
            // console.log(filteredRestaurants)
        }}
      >
        Top Rated Restaurants
      </button>
      <div className="flex flex-wrap">
        {(topRestaurants ? topRestaurants : restaurants).map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} restData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
