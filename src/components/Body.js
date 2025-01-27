import RestaurantCard from "./RestaurantCard";
import restObj from "../utils/dummydata";

const Body = () => {
    const restaurants = restObj[0].card.card.gridElements.infoWithStyle.restaurants;
    return(
        <div>
           <input className="border-2 p-3 rounded-md my-4 mx-6" type="text" placeholder="Search..."/>
            <div className="flex flex-wrap">
            {restaurants.map((restaurant) => (
                <RestaurantCard 
                key={restaurant.info.id} 
                restData={restaurant} 
                />
            ))}
            </div>
        </div>
    )
  }

export default Body;