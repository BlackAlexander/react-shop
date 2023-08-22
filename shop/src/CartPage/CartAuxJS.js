import {useEffect, useState} from "react";
import {computeTotal, getToken} from "../DisplayPage/DisplayAuxJS";
import CartProduct from "../CartPage/CartProduct";

export function undone(){
    alert("The developer did not work on this functionality yet. However, if you really want to order this product, contact him at (0712) 345 678.")

}

export async function deleteItem(itemID, updateItemsData, listOfFavs, updateFavs){
    const actualId = itemID.slice(10);
    console.log(sendDelete(actualId, updateItemsData, listOfFavs, updateFavs));
    const itemToDelete = document.getElementById(itemID);
    try {
        itemToDelete.remove();
    } catch {
        // aia e
    }
    computeTotal();
}

async function sendDelete(itemID, updateItemsData, listOfFavs, updateFavs){
    await fetch(`http://127.0.0.1:42069/cart/643551875/${itemID}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Internship-Auth': getToken()
        },
    }).then(response => response.json()).then((data) => {
        updateItemsData(processItems(data.products, updateItemsData, listOfFavs, updateFavs));
        return processItems(data.products, updateItemsData, listOfFavs, updateFavs);
    });
}

async function sendUpdate(itemID, quantity, updateItemsData, listOfFavs, updateFavs){
    await fetch(`http://127.0.0.1:42069/cart/643551875/${itemID}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Internship-Auth': getToken()
        },
        body: JSON.stringify({ products: [{ id: itemID, quantity: quantity }] }),
    }).then(response => response.json()).then((data) => {
        updateItemsData(processItems(data.products, updateItemsData, listOfFavs, updateFavs));
        return processItems(data.products, updateItemsData, listOfFavs, updateFavs);
    });
}

export async function increaseQuantity(itemID, updateItemsData, listOfFavs, updateFavs){
    const item = document.getElementById(itemID);
    let minusButton = item.getElementsByClassName("cart-product-minus")[0];
    minusButton.style.opacity = "1";
    minusButton.style.cursor = "pointer";
    let quantityBox = item.getElementsByClassName("cart-product-quantity")[0];
    quantityBox.innerHTML = String(parseInt(quantityBox.innerHTML) + 1);
    computeTotal();
    const actualId = itemID.slice(10);
    // const quantity = quantityBox.innerHTML;
    console.log(sendUpdate(actualId, "1", updateItemsData, listOfFavs, updateFavs));
}

export async function decreaseQuantity(itemID, updateItemsData, listOfFavs, updateFavs){
    const item = document.getElementById(itemID);
    let quantityBox = item.getElementsByClassName("cart-product-quantity")[0];
    if(parseInt(quantityBox.innerHTML) === 1){
        let minusButton = item.getElementsByClassName("cart-product-minus")[0];
        minusButton.style.opacity = "0.5";
        minusButton.style.cursor = "default";
    }
    if(parseInt(quantityBox.innerHTML) === 0){
        return;
    }
    quantityBox.innerHTML = String(parseInt(quantityBox.innerHTML) - 1);
    computeTotal();
    const actualId = itemID.slice(10);
    // const quantity = quantityBox.innerHTML;
    console.log(sendUpdate(actualId, "-1", updateItemsData, listOfFavs, updateFavs));
}

export function returnCartItems(fetchUrl, updateItemsData, listOfFavs, updateFavs){
    /** @namespace currentItem.quantity **/
    const [items, setItems] = useState([]);
    let list = [];
    // const cartId = "64d354490459b";
    // const cartId = "64ca3b5518e75"; <
    // const cartId = "64c38597d8f95";
    const cartId = "643551875";
    // const cartId = "64ca3b5518e75";
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
                setItems(data);
            })
    }, [])
    if(items.length === 0){
        return [];
    }
    list = processItems(items.products, updateItemsData, listOfFavs, updateFavs);
    computeTotal();
    return list;
}

function processItems(itemslist, updateItemsData, listOfFavs, updateFavs){
    let list = [];
    if (itemslist === undefined){
        return [];
    }
    for (let i = 0; i < itemslist.length; i++){
        const currentItem = itemslist[i];
        list.push(CartProduct({
            itemId: currentItem.id,
            itemPic: currentItem.thumbnail,
            itemPrice: currentItem.price,
            itemQuantity: currentItem.quantity,
            itemTitle: currentItem.title,
            updateItemsData: updateItemsData,
            listOfFavs: listOfFavs,
            updateFavs: updateFavs
        }))
    }
    return list;
}