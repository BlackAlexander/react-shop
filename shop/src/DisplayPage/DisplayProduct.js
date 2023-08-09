import {addToCart} from "./DisplayAuxJS.js";

export default function Product({ itemId, itemCategory, itemImage, itemTitle, itemPrice }){
    return <div className="shop-item" id={itemId}>
        <div className="item-category">{itemCategory}</div>
        <img src={itemImage} alt="" className="item-image" />
        <div className="item-title">{itemTitle}</div>
        <div className="item-price">${itemPrice}</div>
        <div className="item-add-to-cart" onClick={() => addToCart(itemId)}>🛒 ADD</div>
        {/*<div className="item-add-to-cart">🛒 ADD</div>*/}
    </div>
}