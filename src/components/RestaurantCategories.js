import ItemList from "./ItemList";

const RestaurantCategories = ({ data, showItems, setShowIndex }) => {
  const handlClick = () => {
    setShowIndex();
  };

  return (
    <div
      className="bg-gray-100 w-11/12 sm:w-10/12 md:w-8/12 lg:w-6/12 m-4 mx-auto rounded-md"
      onClick={handlClick}
    >
      <div className="shadow-lg p-4 flex items-center justify-between cursor-pointer rounded-md">
        {data.title} ({data.itemCards.length})
        <span className="text-gray-500">▼</span>
      </div>
      {showItems && <ItemList data={data.itemCards} />}
    </div>
  );
};

export default RestaurantCategories;
