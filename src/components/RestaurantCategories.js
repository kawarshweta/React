import ItemList from "./ItemList";

const RestaurantCategories = ({ data }) => {
  console.log(data);
  return (
    // accordion heading
    <div className="bg-gray-100 w-6/12 m-4 mx-auto">
      <div className="shadow-lg p-4">
        {data.title}({data.itemCards.length})
      </div>
      <ItemList data={data.itemCards} />
    </div>
  );
};

export default RestaurantCategories;
