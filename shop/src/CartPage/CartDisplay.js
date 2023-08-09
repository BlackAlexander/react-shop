import {returnCartItems} from "../CartPage/CartAuxJS";

export default function CartDisplay({updateItemsData}){
    const itemsList = returnCartItems("http://vlad-matei.thrive-dev.bitstoneint.com/wp-json/internship-api/v1/cart/", updateItemsData);

    return <div className="cart-display">
        <h2 className="cart-title">YOUR CART</h2>
        <div className="cart-items" id="cart-items-list">
            {itemsList}
            {itemsList.length===0 && <div className="empty-cart">Hmm...</div>}
        </div>
    </div>
}