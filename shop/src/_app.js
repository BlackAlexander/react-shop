import './Display.css'
import logo from './images/simple-logo-no-bg.png'
import {useEffect, useState} from "react";

function Header(){
  return (
      <>
        <header className="giga-header">
          <div className="home-page">
            <img src={logo} alt="giga image logo" className="giga-logo" />
          </div>
          <h1 className="giga-title">
            GIGA Image
          </h1>
          <a href="" className="cart-in-title">
          {/*<a href="" className="cart-in-title" onMouseOver="showSmallCart()">*/}
            🛒Cart
          </a>
        </header>
      </>
  )
}

function Product({ itemId, itemCategory, itemImage, itemTitle, itemPrice }){
    return <div className="shop-item" id={itemId}>
            <div className="item-category">{itemCategory}</div>
            <img src={itemImage} alt="" className="item-image" />
                <div className="item-title">{itemTitle}</div>
                <div className="item-price">${itemPrice}</div>
                {/*<div className="item-add-to-cart" onClick="addToCart(this)">🛒 ADD</div>*/}
                <div className="item-add-to-cart">🛒 ADD</div>
        </div>
}

function goBackPage(){
    const currentPage = parseInt(document.querySelector(".pagination-current").innerHTML);
    if (currentPage === 1){
        return;
    }
    const itemsSelector = document.querySelector(".pagination-per-page");
    const itemsPerPage = parseInt(document.querySelector(".pagination-per-page")[itemsSelector.selectedIndex].text);
    const totalItems = 100;
    let totalPages = Math.ceil(totalItems/itemsPerPage);
    document.querySelector(".pagination-current").innerHTML = String(currentPage - 1);
    document.querySelector(".pagination-total").innerHTML = "/" + String(totalPages);
}

function goNextPage(){
    const currentPage = parseInt(document.querySelector(".pagination-current").innerHTML);
    const itemsSelector = document.querySelector(".pagination-per-page");
    const itemsPerPage = parseInt(document.querySelector(".pagination-per-page")[itemsSelector.selectedIndex].text);
    const totalItems = 100;
    let totalPages = Math.ceil(totalItems/itemsPerPage);
    if (currentPage === totalPages){
        return;
    }
    document.querySelector(".pagination-current").innerHTML = String(currentPage + 1);
    document.querySelector(".pagination-total").innerHTML = "/" + String(totalPages);
}

function updatePages(){
    const itemsSelector = document.querySelector(".pagination-per-page");
    const itemsPerPage = parseInt(document.querySelector(".pagination-per-page")[itemsSelector.selectedIndex].text);
    const totalItems = 100;
    let totalPages = Math.ceil(totalItems/itemsPerPage);
    document.querySelector(".pagination-total").innerHTML = "/" + String(totalPages);
    document.querySelector(".pagination-current").innerHTML = String(1);
}

function PaginationBar( {updateurl} ){
    // const totalItems = 100;
    // let itemsPerPage = 6;
    // let totalPages = Math.ceil(totalItems/itemsPerPage);

    const handlePageChange = () => {
        const newContent = getURL();
        updateurl(newContent);
    };


    return <div className="pagination-bar">
        <div className="pagination-btn-back" onClick={() => {goBackPage(); handlePageChange();}}>&lt;</div>
        <div className="pagination-current">1</div>
        <div className="pagination-total">/17</div>
        <div className="pagination-btn-next" onClick={() => {goNextPage(); handlePageChange();}}>&gt;</div>
        <select className="pagination-per-page" onChange={() => {updatePages();handlePageChange();}}>
            <option value="6">6</option>
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
        </select>
        <div className="pagination-final">per page</div>
    </div>
}

function Footer(){
    return (
        <>
            <footer className="giga-footer">
                <div className="giga-name">
                    Copyright © 2023 All rights reserved. Alexandru Negru.
                </div>
            </footer>
        </>
    )
}

function getURL(){
    const itemsSelector = document.querySelector(".pagination-per-page");
    if (itemsSelector === null){
        return "https://dummyjson.com/products?limit=6";
    }
    const currentPage = parseInt(document.querySelector(".pagination-current").innerHTML);
    const itemsPerPage = parseInt(document.querySelector(".pagination-per-page")[itemsSelector.selectedIndex].text);
    let skip = (currentPage-1)*itemsPerPage;
    let finalURL = "https://dummyjson.com/products";
    finalURL += "?limit=" + String(itemsPerPage);
    finalURL += "&skip=" + String(skip);
    return finalURL;
}

function returnInitialItems(fetchUrl){
    /** @namespace currentItem.thumbnail **/
    /** @namespace currentItem.price **/
    /** @namespace items.products **/
    const [items, setItems] = useState([]);
    const list = [];

    useEffect(() => {
        const url = fetchUrl;
        fetch(url)
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

// <div className="products-display" id="list-of-products" onMouseOver="hideSmallCart()">

function ProductsDisplay({fetchUrl}){
    if (String(fetchUrl.slice(0,4)) !== "http"){
        return (<> </>)
    }
    const itemsList = returnInitialItems(fetchUrl);
    return(
        <>
            <div className="products-display" id="list-of-products">
                {itemsList}
            </div>
        </>
    )
}


export default function Display() {
    // console.clear();
    const [url, setUrl] = useState("");
    const [key, setKey] = useState(0);

    useEffect(()=>{
        setUrl(getURL());
    }, [])

    const updateurl = (newurl) => {
        console.log(newurl);
        setUrl(newurl);
        setKey(key + 1);
    }

    return (
        <>
          <Header />
          <ProductsDisplay fetchUrl={url} key={key}/>
          <PaginationBar updateurl={updateurl}/>
          <Footer />
        </>
    )
}
