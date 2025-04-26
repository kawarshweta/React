import { useDispatch } from "react-redux";
import { IMG_URL } from "../utils/constants";
import { addItems } from "../utils/cartSlice";

const ItemList = ({ data }) => {
  const dispatch = useDispatch();
  
  const handleAddItem = (item) =>{
    dispatch(addItems(item))
  }
  return (
    <div>
      {data.map((item, index) => (
        <div key={`${item.card.info.id}-${index}`} className="flex p-6 border-gray-200 border-b-2 justify-between">
          <div className="text-start w-4/5 p-6">
            <div className="font-semibold text-xl">
              {item?.card?.info?.name}
            </div>
            <div>
              <span className="font-semibold text-lg text-gray-500">
                ₹ {item?.card?.info?.price ? item?.card?.info?.price/100 : item?.card?.info?.defaultPrice}
                {item?.card?.info?.ratings?.aggregatedRating?.rating} ⭐
              </span>
            </div>
            <p className="text-gray-800">{item?.card?.info?.description}</p>
          </div>

          <div className="w-1/5">
            <img src={IMG_URL + item?.card?.info?.imageId} className="w-30 h-30 object-contain rounded-md bg-white"/>
            <span className="bg-white text-green-600 text-md font-bold rounded-md relative px-2 py-1 shadow-lg cursor-pointer" 
            onClick={()=> handleAddItem(item)}>
              ADD +
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
