import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearItems } from "../utils/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);

  const handleClearCart = () => {
    dispatch(clearItems());
  };

  return (
    <div className="w-full sm:w-10/12 lg:w-6/12 px-4 py-8 m-auto">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <h1 className="text-2xl sm:text-4xl font-bold text-center sm:text-left">Cart</h1>
        <button
          className="bg-black text-white px-4 py-2 rounded text-sm sm:text-base"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
      </div>

      <div className="text-center font-semibold text-lg mt-6">
        {cartItems.length === 0 && <p>Cart is empty. Explore our app!</p>}
      </div>

      <div className="mt-6">
        <ItemList data={cartItems} />
      </div>
    </div>
  );
};

export default Cart;