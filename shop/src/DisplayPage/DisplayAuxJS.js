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

export function returnInitialItems(fetchUrl){
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
            key: "display-item"+String(currentItem.id),
            itemId: currentItem.id,
            itemCategory: currentItem.category,
            itemImage: currentItem.thumbnail,
            itemTitle: currentItem.title,
            itemPrice: currentItem.price
        }))
    }
    return list;
}