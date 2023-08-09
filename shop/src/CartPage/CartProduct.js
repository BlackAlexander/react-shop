import {deleteItem, increaseQuantity, decreaseQuantity} from "../CartPage/CartAuxJS";

export default function CartProduct({itemId, itemPic, itemTitle, itemQuantity, itemPrice, updateItemsData}){
    const newId = "cart-item-" + String(itemId);
    return <div className="cart-product" id={newId} key={newId}>
        <img className="cart-product-pic" alt="Cart Product Picture" src={itemPic} />
        <div className="cart-product-title">{itemTitle}</div>
        <div className="cart-product-delete" onClick={() => {deleteItem(newId).then(r => updateItemsData()); }}>🗑</div>
        <div className="cart-product-minus" onClick={() => {decreaseQuantity(newId); }}>-</div>
        <div className="cart-product-quantity">{itemQuantity}</div>
        <div className="cart-product-plus" onClick={() => {increaseQuantity(newId); }}>+</div>
        <div className="cart-product-price">{itemPrice}</div>
        <div className="cart-product-heart">🖤</div>
    </div>
}