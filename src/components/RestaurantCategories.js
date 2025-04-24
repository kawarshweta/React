import ItemList from "./ItemList";

const RestaurantCategories = ({ data, showItems, setShowIndex }) => {

  const handlClick = () =>{
    setShowIndex()
  }
  
  return (
    // accordion heading
    <div className="bg-gray-100 w-6/12 m-4 mx-auto" onClick={handlClick}>
      <div className="shadow-lg p-4 flex items-center justify-between cursor-pointer">
        {data.title}({data.itemCards.length})
        <span className="text-gray-500">▼</span>
      </div>
      {showItems && <ItemList data={data.itemCards} />}
    </div>
  );
};

export default RestaurantCategories;
