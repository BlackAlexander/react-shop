import './Cart.css'
import CartHeader from "../CartPage/CartHeader";
import CartDisplay from "../CartPage/CartDisplay";
import CartSummary from "../CartPage/CartSummary";
import CartFooter from "../CartPage/CartFooter";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {selectFavs, setFavs} from "../redux/slices/favorites";

export default function Cart(){
    const [cartItems, setCartItems] = useState([])
    const updateItemsData = (newList) => {
        setCartItems(newList);
    }

    const dispatch = useDispatch();
    const listOfFavs = useSelector(selectFavs);
    const updateFavs = (newList) => {
        dispatch(setFavs(newList));
    }

    return (
        <>
            <CartHeader />
            <CartDisplay updateItemsData={updateItemsData} listOfFavs={listOfFavs} updateFavs={updateFavs}/>
            <CartSummary />
            <CartFooter />
        </>
    )
}