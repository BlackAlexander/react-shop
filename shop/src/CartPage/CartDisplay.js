import {returnCartItems} from "../CartPage/CartAuxJS";
import {useSelector} from "react-redux";

export default function CartDisplay({updateItemsData}){
    // const itemsList = returnCartItems("http://vlad-matei.thrive-dev.bitstoneint.com/wp-json/internship-api/v1/cart/", updateItemsData);
    const itemsList = returnCartItems("http://vlad-matei.thrive-dev.bitstoneint.com/wp-json/internship-api/v1/cart/", updateItemsData);
    const cartItems = useSelector((state) => state.cart.cartItems);
    return <div className="cart-display">
        <h2 className="cart-title">YOUR CART</h2>
        <div className="cart-items" id="cart-items-list">
            {/*{cartItems.length===0 ? itemsList:cartItems}*/}
            {itemsList.length===0 ? <div className="empty-cart">Hmm...</div>:itemsList}
        </div>
    </div>
}