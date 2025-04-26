import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { useDispatch } from "react-redux";
import { clearItems } from "../utils/cartSlice";

const Cart = () =>{

    const dispatch = useDispatch()

    const handleClearCart = () =>{
        dispatch(clearItems())
    }

    const cartItems = useSelector((store) => store.cart.items)
    return(
        <div className="w-6/12 text-center p-10 m-auto align-middle justify-between">
            <div className="flex justify-between ">
                <h1 className="text-4xl font-bold">Cart</h1>
                <button className="bg-black text-white px-6 rounded" onClick={handleClearCart}>
                    Clear cart
                </button>
            </div>
            <div className="text-center font-bold text-xl mt-10">{cartItems.length === 0 && <p>Cart is empty explore our app</p>}</div>
            <div className="m-auto">
                <ItemList data={cartItems}/>
            </div>
        </div>
    )
}

export default Cart;