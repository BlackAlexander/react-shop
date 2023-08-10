import './Cart.css'
import CartHeader from "../CartPage/CartHeader";
import CartDisplay from "../CartPage/CartDisplay";
import CartSummary from "../CartPage/CartSummary";
import CartFooter from "../CartPage/CartFooter";
import {useState} from "react";
import {Provider} from "react-redux";

export default function Cart(){
    const [cartItems, setCartItems] = useState([])
    const updateItemsData = (newList) => {
        setCartItems(newList);
    }


    return (
        <>
            <CartHeader />
            <CartDisplay updateItemsData={updateItemsData}/>
            <CartSummary />
            <CartFooter />
        </>
    )
}