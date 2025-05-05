import { IMG_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { info } = props.restData;

  const {
    name = "",
    avgRating = "",
    sla: { deliveryTime = "" } = {},
    cuisines = [],
    cloudinaryImageId = "",
  } = info || {};

  return (
    <div className="rounded-md m-3 p-4 transition-transform duration-300 ease-in-out transform hover:scale-105">
      <img
        className="w-full h-48 object-cover rounded-2xl mb-2"
        src={IMG_URL + cloudinaryImageId}
      />
      <h3 className="text-xl font-semibold">{name}</h3>
      <div className="flex justify-start items-center font-normal text-base text-gray-700 gap-x-2">
        <svg
          width="20"
          height="20"
          viewBox="0 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Star Icon</title>
          <circle cx="256" cy="256" r="233" fill="#2BB673" />
          <polygon
            fill="#FFFFFF"
            points="256,119.4 300.4,209.3 399.6,223.8 327.8,293.8 344.8,392.6 256,345.9 167.2,392.6 184.2,293.8 112.4,223.8 211.6,209.3"
          />
        </svg>

        <p>Rating: {avgRating}</p>
        <p className="ml-4 font-medium">{deliveryTime} mins</p>
      </div>
      <p className="flex justify-start font-normal text-base text-gray-700 truncate">
        Cuisines : {cuisines.join()}
      </p>
    </div>
  );
};

export const labelledRestaurant = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label>Promoted</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
