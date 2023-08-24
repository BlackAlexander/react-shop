import './Cart.css'
import CartHeader from "../CartPage/CartHeader";
import CartDisplay from "../CartPage/CartDisplay";
import CartSummary from "../CartPage/CartSummary";
import CartFooter from "../CartPage/CartFooter";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {selectFavs, setFavs} from "../redux/slices/favorites";
import {getUserID} from "../DisplayPage/DisplayAuxJS";
import {useNavigate} from "react-router-dom";

export default function Cart(){
    const [cartItems, setCartItems] = useState([])
    const navigate = useNavigate()
    const updateItemsData = (newList) => {
        setCartItems(newList);
    }

    const dispatch = useDispatch();
    const listOfFavs = useSelector(selectFavs);
    const IDToUse = getUserID();
    const updateFavs = (newList) => {
        dispatch(setFavs(newList));
    }

    const handleNavigateToPlace = () => {
        navigate('/place');
    };

    return (
        <>
            <CartHeader />
            <CartDisplay updateItemsData={updateItemsData} listOfFavs={listOfFavs} updateFavs={updateFavs} IDToUse={IDToUse}/>
            <CartSummary handleNavigateToPlace={handleNavigateToPlace}/>
            <CartFooter />
        </>
    )
}