import {returnCartItems} from "../CartPage/CartAuxJS";
export default function CartDisplay({updateItemsData, listOfFavs, updateFavs} ){
    const itemsList = returnCartItems("https://vlad-matei.thrive-dev.bitstoneint.com/wp-json/internship-api/v1/cart/", updateItemsData, listOfFavs, updateFavs);

    return <div className="cart-display">
        <h2 className="cart-title">YOUR CART</h2>
        <div className="cart-items" id="cart-items-list">
            {/*{cartItems.length===0 ? itemsList:cartItems}*/}
            {itemsList.length===0 ? <div className="empty-cart">Hmm...</div>:itemsList}
        </div>
    </div>
}