import { IMG_URL } from "../utils/constants";
const ItemList = ({ data }) => {
  console.log(data);
  return (
    <div>
      {data.map((item) => (
        <div key={item.card.info.id} className="flex p-6 border-gray-200 border-b-2 justify-between">
          <div className="text-start w-9/2">
            <div className="font-semibold text-xl">{item?.card?.info?.name}</div>
            <div>
              <span className="font-semibold text-lg text-gray-500">
                ₹ {item?.card?.info?.price ? item?.card?.info?.price/100 : item?.card?.info?.defaultPrice}
                {item?.card?.info?.ratings?.aggregatedRating?.rating} ⭐
              </span>
            </div>
            <p className="text-gray-800">{item?.card?.info?.description}</p>
          </div>

          <div className="w-4/12 flex align-center justify-end">
            <img src={IMG_URL + item?.card?.info?.imageId} className="w-28 h-28 object-contain rounded-md bg-white p-1"/>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
