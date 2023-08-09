import {useEffect, useState} from "react";
import {getToken} from "../DisplayPage/DisplayAuxJS";
import CartProduct from "../CartPage/CartProduct";

export function undone(){
    alert("The developer did not work on this functionality yet. However, if you really want to order this product, contact him at (0712) 345 678.")

}

export function deleteItem(itemId){
    console.log(itemId);
}

export function increaseQuantity(itemId){
    console.log(itemId);
}

export function decreaseQuantity(itemId){
    console.log(itemId);
}

export function returnCartItems(fetchUrl){
    /** @namespace currentItem.quantity **/
    const [items, setItems] = useState([]);
    const list = [];
    // const cartId = "64d354490459b";
    const cartId = "64c38597d8f95";
    fetchUrl += cartId;
    useEffect( () => {
        let response = fetch(fetchUrl, {
            method: 'GET',
            headers: {
                'Internship-Auth': getToken(),
            },
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setItems(data);
            })
    }, [])
    console.log(items);
    if(items.length === 0){
        return [];
    }
    for (let i = 0; i < items.products.length; i++){
        const currentItem = items.products[i];
        list.push(CartProduct({
            key: "cart-item-here"+String(currentItem.id),
            itemId: currentItem.id,
            itemPic: currentItem.thumbnail,
            itemPrice: currentItem.price,
            itemQuantity: currentItem.quantity,
            itemTitle: currentItem.title
        }))
    }
    return list;
}