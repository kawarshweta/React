import RestaurantCard, { labelledRestaurant } from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRestaurants, setFilteredRestaurnts] = useState([]);
  const [searchText, setSearchText] = useState("");

  // const promotedRestaurantCards = labelledRestaurant(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      `https://go.x2u.in/proxy?email=shwetakawar5@gmail.com&apiKey=2adc586e&url=${encodeURIComponent(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.1160966&lng=72.9977486&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      )}`
    );

    const json = await data.json();
    console.log("API Response:", json);

    // Dynamically search for restaurants list in API response
    let restaurants = [];
    for (const card of json?.data?.cards || []) {
      const resList = card?.card?.card?.gridElements?.infoWithStyle?.restaurants;
      if (Array.isArray(resList)) {
        restaurants = resList;
        break;
      }
    }

    // Set state if restaurants found
    if (restaurants.length > 0) {
      setRestaurantList(restaurants);
      setFilteredRestaurnts(restaurants);
    } else {
      console.warn("No restaurants found in API response");
      setRestaurantList([]);
      setFilteredRestaurnts([]);
    }
  };

  const onlineStatus = useOnlineStatus();

  if (!onlineStatus) {
    return <div> Oooops!! Check your internet connection </div>;
  }

  return restaurantList?.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      <div className="flex flex-col sm:flex-row items-center justify-center px-4 sm:px-8 py-4 gap-2 sm:gap-4">
        <input
          className="border-2 p-2 rounded-md w-full sm:w-1/2 md:w-1/3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-orange-500"
          type="text"
          placeholder="Search..."
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="border p-2 rounded-md text-sm sm:text-base bg-gray-100 hover:bg-gray-200 transition-colors w-full sm:w-auto"
          onClick={() => {
            const filtered = restaurantList.filter((restaurant) =>
              restaurant.info.name
                .toLowerCase()
                .includes(searchText.toLowerCase())
            );
            setFilteredRestaurnts(filtered);
          }}
        >
          Search
        </button>
        <button
          className="bg-orange-500 hover:bg-orange-700 text-white font-semibold p-2 rounded-md text-sm sm:text-base transition-colors w-full sm:w-auto"
          aria-label="Filter top-rated restaurants"
          onClick={() => {
            const filtered = restaurantList.filter(
              (restaurant) =>
                parseFloat(restaurant?.info?.avgRatingString) > 4.4
            );
            setFilteredRestaurnts(filtered);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="flex flex-wrap justify-center p-4">
        {Array.isArray(filteredRestaurants) &&
          filteredRestaurants.map((restaurant) => (
            <Link
              className="w-full sm:w-72 md:w-80 lg:w-96"
              key={restaurant.info.id}
              to={`/restaurantmenu/${restaurant.info.id}`}
            >
              <RestaurantCard restData={restaurant} />
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Body;
