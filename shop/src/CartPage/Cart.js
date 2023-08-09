import './Cart.css'
import CartHeader from "../CartPage/CartHeader";
import CartDisplay from "../CartPage/CartDisplay";
import CartSummary from "../CartPage/CartSummary";
import CartFooter from "../CartPage/CartFooter";
import {useState} from "react";

export default function Cart(){
    const [key, setKey] = useState(0);
    const [cartItems, setCartItems] = useState([])
    const updateItemsData = (newList) => {
        setCartItems(newList);
        setKey(key + 1);
    }
    return (
        <>
            <CartHeader />
            <CartDisplay updateItemsData={updateItemsData} key={key}/>
            <CartSummary />
            <CartFooter />
        </>
    )
}