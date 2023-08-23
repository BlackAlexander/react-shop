import {returnCartItems} from "../CartPage/CartAuxJS";
import {computeTotal} from "../DisplayPage/DisplayAuxJS";
import {useEffect} from "react";
export default function CartDisplay({updateItemsData, listOfFavs, updateFavs, IDToUse} ){
    const itemsList = returnCartItems("http://127.0.0.1:42069/cart/", updateItemsData, listOfFavs, updateFavs, IDToUse);

    useEffect(() =>{
        computeTotal();
    }, [])

    return <div className="cart-display">
        <h2 className="cart-title">YOUR CART</h2>
        <div className="cart-items" id="cart-items-list">
            {/*{cartItems.length===0 ? itemsList:cartItems}*/}
            {itemsList.length===0 ? <div className="empty-cart">Hmm...</div>:itemsList}
        </div>
    </div>
}