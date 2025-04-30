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
      <div className="flex justify-start items-center font-normal text-base text-gray-700">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-4 text-green-800 rounded-full p-2 flex"
        >
          <path
            fillRule="evenodd"
            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
            clipRule="evenodd"
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
