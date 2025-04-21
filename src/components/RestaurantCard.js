import {IMG_URL} from "../utils/constants";

const RestaurantCard = (props) => {
    const {info} = props.restData;

    const {
      name = '',
      avgRating = '',  
      sla: {deliveryTime = ''} = {},
      cuisines = [],
      cloudinaryImageId = ''
    } = info || {};

    return(
        <div className="border-2 rounded-md m-3 p-4">
            <img className="w-64 rounded-md mb-2 h-52" src={IMG_URL + cloudinaryImageId}/>
            <h3 className="">{name}</h3>
            <div className="flex justify-start">
              <p>Rating: {avgRating}</p>
              <p className="ml-4">{deliveryTime} mins</p>
            </div>
            <p>Cuisines : {cuisines.join()}</p>
        </div>
    )
}

export const labelledRestaurant = (RestaurantCard) =>{
  return (props) =>{
    return (
      <div>
        <label>Promoted</label>
        <RestaurantCard {...props} />
      </div>
    )
  }
}

export default RestaurantCard;