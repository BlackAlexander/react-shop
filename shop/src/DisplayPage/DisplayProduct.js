import {addToCart, hoverItemOff, hoverItemOn} from "./DisplayAuxJS.js";

export default function Product({ itemId, itemCategory, itemImage, itemTitle, itemPrice, listOfFavs, updateFavs, navigate, showreview }){
    let isFavorite = '🖤';

    if (listOfFavs.includes(itemId.slice(4))){
        isFavorite = '❤️';
    }

    function switchInFavs() {
        const newId = itemId.slice(4);
        if (listOfFavs.includes(newId)){
            let newList = listOfFavs.filter(x => x !== newId);
            updateFavs(newList);

        } else {
            let newList = structuredClone(listOfFavs);
            newList.push(newId);
            updateFavs(newList);
        }
    }

    return <div className="shop-item" id={itemId} key={itemId}>
        <div className="item-rate" onClick={() => {showreview(String(itemId), itemTitle);}}>📈</div>
        <div className="item-category">{itemCategory}</div>
        <div className="item-heart" onClick={switchInFavs}>{isFavorite}</div>
        <img
            src={itemImage}
            alt="" className="item-image"
            onMouseOver={()=>{hoverItemOn(itemId)}}
            onMouseOut={()=>{hoverItemOff(itemId)}}
            onClick={()=>{
                let newAddress = "/shop";
                newAddress += "/";
                newAddress += String(itemId.slice(4));
                navigate(newAddress);
            }}
        />
        <div className="item-title">{itemTitle}</div>
        <div className="item-price">${itemPrice}</div>
        <div className="item-add-to-cart" onClick={() => addToCart(itemId)}>🛒 ADD</div>
    </div>
}