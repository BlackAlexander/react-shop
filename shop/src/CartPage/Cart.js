import './Cart.css'
import CartHeader from "../CartPage/CartHeader";
import CartDisplay from "../CartPage/CartDisplay";
import CartSummary from "../CartPage/CartSummary";
import CartFooter from "../CartPage/CartFooter";
import {useState} from "react";
import {Provider, useDispatch} from "react-redux";
import store from '../redux/store.js'

export default function Cart(){
    const [cartItems, setCartItems] = useState([])
    const updateItemsData = (newList) => {
        setCartItems(newList);
    }
    const dispatch = useDispatch();

    const updateCartItems = (newList) => {
        // Dispatch the action with updated cartItems
        dispatch({ type: 'UPDATE_CART_ITEMS', payload: newList });
    }

    return (
        <>
            <Provider store={store}>
                <CartHeader />
                <CartDisplay updateItemsData={updateItemsData}/>
                <CartSummary />
                <CartFooter />
            </Provider>
        </>
    )
}