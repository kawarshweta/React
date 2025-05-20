import { useDispatch } from "react-redux";
import { IMG_URL } from "../utils/constants";
import { addItems } from "../utils/cartSlice";

const ItemList = ({ data }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItems(item));
  };

  return (
    <div>
      {data.map((item, index) => (
        <div
          key={`${item.card.info.id}-${index}`}
          className="flex flex-col-reverse sm:flex-row p-4 sm:p-6 border-gray-200 border-b-2 justify-between gap-4"
        >
          {/* Text Content */}
          <div className="w-full sm:w-4/5 text-start">
            <div className="font-semibold text-lg sm:text-xl mb-1">
              {item?.card?.info?.name}
            </div>
            <div className="text-gray-500 text-sm sm:text-base mb-1">
              ₹{" "}
              {item?.card?.info?.price
                ? item?.card?.info?.price / 100
                : item?.card?.info?.defaultPrice}
              {"  "}
              {item?.card?.info?.ratings?.aggregatedRating?.rating} ⭐
            </div>
            <p className="text-gray-800 text-sm">
              {item?.card?.info?.description}
            </p>
          </div>

          {/* Image and Button */}
          <div className="w-full sm:w-1/5 flex flex-col items-center justify-between">
            <img
              src={IMG_URL + item?.card?.info?.imageId}
              className="w-full aspect-square object-cover rounded-md"
              alt={item?.card?.info?.name}
            />
            <span
              className="bg-white text-green-600 text-md font-bold rounded-md relative px-2 py-1 shadow-lg cursor-pointer mt-2"
              onClick={() => handleAddItem(item)}
            >
              ADD +
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
