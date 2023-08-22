import {useEffect, useState} from "react";
import Product from "./DisplayProduct";

export function goBackPage(){
    const currentPage = parseInt(document.querySelector(".pagination-current").innerHTML);
    if (currentPage === 1){
        return;
    }

    const categorySelector = document.querySelector(".category-options");
    const category = document.querySelector(".category-options")[categorySelector.selectedIndex].text;
    if(category !== "all"){
        document.querySelector(".pagination-current").innerHTML = String(1);
        document.querySelector(".pagination-total").innerHTML = "/" + String(1);
        return;
    }

    const itemsSelector = document.querySelector(".pagination-per-page");
    const itemsPerPage = parseInt(document.querySelector(".pagination-per-page")[itemsSelector.selectedIndex].text);
    const totalItems = 100;
    let totalPages = Math.ceil(totalItems/itemsPerPage);
    document.querySelector(".pagination-current").innerHTML = String(currentPage - 1);
    document.querySelector(".pagination-total").innerHTML = "/" + String(totalPages);
}

export function goNextPage(){
    const currentPage = parseInt(document.querySelector(".pagination-current").innerHTML);
    const itemsSelector = document.querySelector(".pagination-per-page");
    const itemsPerPage = parseInt(document.querySelector(".pagination-per-page")[itemsSelector.selectedIndex].text);
    const totalItems = 100;
    let totalPages = Math.ceil(totalItems/itemsPerPage);
    if (currentPage === totalPages){
        return;
    }

    const categorySelector = document.querySelector(".category-options");
    const category = document.querySelector(".category-options")[categorySelector.selectedIndex].text;
    if(category !== "all"){
        document.querySelector(".pagination-current").innerHTML = String(1);
        document.querySelector(".pagination-total").innerHTML = "/" + String(1);
        return;
    }
    document.querySelector(".pagination-current").innerHTML = String(currentPage + 1);
    document.querySelector(".pagination-total").innerHTML = "/" + String(totalPages);
}

export function getToken(){
    const tokenObject = JSON.parse(window.localStorage.getItem('user'))
    return tokenObject.token;
}

export function decodeToken(){
    const decodedToken = atob(getToken());
    const breakIndex = decodedToken.indexOf("|");
    return decodedToken.slice(0, breakIndex);
}

export function getURL(){
    const itemsSelector = document.querySelector(".pagination-per-page");
    if (itemsSelector === null){
        return "https://dummyjson.com/products?limit=6";
    }
    const currentPage = parseInt(document.querySelector(".pagination-current").innerHTML);
    const itemsPerPage = parseInt(document.querySelector(".pagination-per-page")[itemsSelector.selectedIndex].text);
    let skip = (currentPage-1)*itemsPerPage;
    let finalURL = "https://dummyjson.com/products";
    const categorySelector = document.querySelector(".category-options");
    const category = document.querySelector(".category-options")[categorySelector.selectedIndex].text;
    document.querySelector(".hide-pagination").style.visibility="hidden";
    if(category !== "all"){
        finalURL += "/category/";
        finalURL += category;
        document.querySelector(".pagination-current").innerHTML = String(1);
        document.querySelector(".pagination-total").innerHTML = "/" + String(1);
    } else {
        const itemsSelector = document.querySelector(".pagination-per-page");
        const itemsPerPage = parseInt(document.querySelector(".pagination-per-page")[itemsSelector.selectedIndex].text);
        const totalItems = 100;
        let totalPages = Math.ceil(totalItems/itemsPerPage);
        document.querySelector(".pagination-total").innerHTML = "/" + String(totalPages);

    }
    finalURL += "?limit=" + String(itemsPerPage);
    finalURL += "&skip=" + String(skip);
    if (document.searchON === true){
        document.searchON = false;
        let valueSearch = document.getElementById("search-query-bar").value;
        if (valueSearch.length === 0){
            return finalURL;
        }
        document.querySelector(".hide-pagination").style.visibility="visible";
        return "https://dummyjson.com/products/search?q="+String(valueSearch);
    } else {
        document.getElementById("search-query-bar").value = "";
    }
    return finalURL;
}

export function updatePages(){
    const itemsSelector = document.querySelector(".pagination-per-page");
    const itemsPerPage = parseInt(document.querySelector(".pagination-per-page")[itemsSelector.selectedIndex].text);
    const totalItems = 100;
    let totalPages = Math.ceil(totalItems/itemsPerPage);
    document.querySelector(".pagination-total").innerHTML = "/" + String(totalPages);
    document.querySelector(".pagination-current").innerHTML = String(1);
}

export function returnInitialItems(fetchUrl, listOfFavs, updateFavs, navigate, showreview){
    /** @namespace currentItem.thumbnail **/
    /** @namespace currentItem.price **/
    /** @namespace items.products **/
    const [items, setItems] = useState([]);
    const list = [];

    useEffect(() => {
        fetch(fetchUrl)
            .then(response => response.json())
            .then(data => {
                setItems(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                return [];
            });
    }, []);
    if(items.length === 0){
        return [];
    }
    for (let i = 0; i < items.products.length; i++){
        const currentItem = items.products[i];
        list.push(Product({
            itemId: "item"+currentItem.id,
            itemCategory: currentItem.category,
            itemImage: currentItem.thumbnail,
            itemTitle: currentItem.title,
            itemPrice: currentItem.price,
            listOfFavs: listOfFavs,
            updateFavs: updateFavs,
            navigate: navigate,
            showreview: showreview
        }))
    }
    return list;
}

export function computeTotal(){
    let totalMoney = 0;
    let totalQuantity = 0;
    let itemsListHTML = document.getElementsByClassName("cart-product");
    let itemsList = Array.prototype.slice.call(itemsListHTML)
    if (itemsList === undefined){
        return;
    }
    for (let i = 0; i < itemsList.length; i++){
        let currentMoney = parseInt((itemsList[i].querySelector(".cart-product-price").innerHTML).slice(1));
        let currentQuantity = parseInt(itemsList[i].querySelector(".cart-product-quantity").innerHTML);
        totalMoney += currentMoney * currentQuantity;
        totalQuantity += currentQuantity;
    }
    let totalItem = document.querySelector(".summary-total-value");
    totalItem.innerHTML = "$"+String(totalMoney);
    let priceItem = document.querySelector(".summary-price-value");
    priceItem.innerHTML = "$"+String(totalMoney);
    let itemsItem = document.querySelector(".summary-items-value");
    itemsItem.innerHTML = String(itemsList.length);
    let quantityItem = document.querySelector(".summary-quantity-value");
    quantityItem.innerHTML = String(totalQuantity);
}

export async function addToCart(itemID){
    const itemElement = document.getElementById(String(itemID));
    const element = itemElement.getElementsByTagName("div")[5];
    if (element.innerHTML === "🛒 Added!"){
        return;
    }
    addElementToCart(itemID).then();
    element.innerHTML = "🛒 Added!";
    element.classList.remove("item-add-to-cart");
    element.classList.add("item-added-to-cart");
    let popup = document.getElementById("cart-popup");
    popup.style.visibility = "visible";
    popup.style.opacity = "1";
    setTimeout(() => {
        showCartAgain(element);
    }, 1000);
}

function showCartAgain(element){
    element.innerHTML = "🛒 ADD!";
    element.classList.remove("item-added-to-cart");
    element.classList.add("item-add-to-cart");
    let popup = document.getElementById("cart-popup");
    popup.style.opacity = "1";
    let fadeEffect = setInterval(function () {
        if (popup.style.opacity > 0.4) {
            popup.style.opacity -= 0.2;
        } else {
            clearInterval(fadeEffect);
            popup.style.visibility = "hidden";
        }
    }, 100);
}


async function addElementToCart(elementID){
    let itemID = String(elementID).slice(4);

    return await fetch('http://127.0.0.1:42069/cart/643551875', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Internship-Auth': getToken(),
        },
        body: JSON.stringify({
            userId: 1,
            products: [
                {
                    id: itemID,
                    quantity: 1,
                },
            ]
        })
    })
        .then(res => res.json());
}

export function hoverItemOn(theId){
    let itemToHover = document.getElementById(theId);
    itemToHover.style.border = "3px solid #FFFFFF";
    itemToHover.style.backgroundColor = "rgba(255, 255, 255, 0.8)";
    let insidePic = itemToHover.getElementsByTagName('img')[0];
    insidePic.style.filter = "opacity(100%)";
    insidePic.style.cursor = "pointer";
}

export function hoverItemOff(theId){
    let itemToHover = document.getElementById(theId);
    itemToHover.style.border = "3px solid transparent";
    itemToHover.style.backgroundColor = "rgba(255, 255, 255, 0.7)";
    let insidePic = itemToHover.getElementsByTagName('img')[0];
    insidePic.style.filter = "opacity(95%)";
}

