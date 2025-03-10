import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRestaurants, setFilteredRestaurnts] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.1160966&lng=72.9977486&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    setRestaurantList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurnts(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };

  const onlineStatus = useOnlineStatus();

  if (!onlineStatus) { 
    return <div> Oooops!! Check your internet connection </div>;
  }
  

  return restaurantList?.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      <input
        className="border-2 p-3 rounded-md my-4"
        type="text"
        placeholder="Search..."
        value={searchText}
        onChange={(e) => {setSearchText(e.target.value)
        }}
      />
      <button className="border p-3 rounded-md" 
      onClick={() => {
        const filteredRestaurants = restaurantList.filter(
          (restaurant) => restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
        );
        setFilteredRestaurnts(filteredRestaurants);
        }}>
        Search
      </button>
      <button
        className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-2 rounded-md mx-4"
        onClick={() => {
          const filteredRestaurants = restaurantList.filter(
            (restaurant) => parseFloat(restaurant?.info?.avgRatingString) > 4.4
          );
          setFilteredRestaurnts(filteredRestaurants);
        }}
      >
        Top Rated Restaurants
      </button>
      <div className="flex flex-wrap justify-center gap-4">
        {filteredRestaurants.map((restaurant) => (
          <Link className="block w-full sm:w-[300px] p-2" key={restaurant.info.id} to={`/restaurantmenu/${restaurant.info.id}`}><RestaurantCard  restData={restaurant} /></Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
