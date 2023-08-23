import {deleteItem, increaseQuantity, decreaseQuantity} from "../CartPage/CartAuxJS";

export default function CartProduct({itemId, itemPic, itemTitle, itemQuantity, itemPrice, updateItemsData, listOfFavs, updateFavs, IDToUse}){
    const newId = "cart-item-" + String(itemId);
    const newPrice = "$" + String(itemPrice);

    let isFavorite = '🖤';
    if (listOfFavs.includes(String(itemId))){
        isFavorite = '❤️';
    }

    function switchInFavs() {
        if (listOfFavs.includes(String(itemId))){
            let newList = listOfFavs.filter(x => x !== String(itemId));
            updateFavs(newList);

        } else {
            let newList = structuredClone(listOfFavs);
            newList.push(String(itemId));
            updateFavs(newList);
        }
    }

    return <div className="cart-product" id={newId} key={newId}>
        <img className="cart-product-pic" alt="Cart Product Picture" src={itemPic} />
        <div className="cart-product-title">{itemTitle}</div>
        <div className="cart-product-delete" onClick={() => {deleteItem(newId, updateItemsData, listOfFavs, updateFavs, IDToUse).then(() => {}); }}>🗑</div>
        <div className="cart-product-minus" onClick={() => {decreaseQuantity(newId, updateItemsData, listOfFavs, updateFavs, IDToUse).then(() => {}); }}>-</div>
        <div className="cart-product-quantity">{itemQuantity}</div>
        <div className="cart-product-plus" onClick={() => {increaseQuantity(newId, updateItemsData, listOfFavs, updateFavs, IDToUse).then(() => {}); }}>+</div>
        <div className="cart-product-price">{newPrice}</div>
        <div className="cart-product-heart" onClick={switchInFavs}>{isFavorite}</div>
    </div>
}