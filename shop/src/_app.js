import './Display.css'
import logo from './images/simple-logo-no-bg.png'
import {useEffect, useState} from "react";
import {createContext, useContext} from 'react';

const ItemsContext = createContext();

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
    console.log("back");
    const currentPage = parseInt(document.querySelector(".pagination-current").innerHTML);
    if (currentPage === 1){
        return;
    }
    document.querySelector(".pagination-current").innerHTML = String(currentPage - 1);
}

function goNextPage(){
    console.log("front");
    const currentPage = parseInt(document.querySelector(".pagination-current").innerHTML);
    const itemsSelector = document.querySelector(".pagination-per-page");
    const itemsPerPage = parseInt(document.querySelector(".pagination-per-page")[itemsSelector.selectedIndex].text);
    const totalItems = 100;
    let totalPages = Math.ceil(totalItems/itemsPerPage);
    if (currentPage === totalPages){
        return;
    }
    document.querySelector(".pagination-current").innerHTML = String(currentPage + 1);
}

function updateItems(page, itemsPerPage){

}

function PaginationBar({}){
    const totalItems = 100;
    let itemsPerPage = 6;
    let totalPages = Math.ceil(totalItems/itemsPerPage);
    return <div className="pagination-bar">
        <div className="pagination-btn-back" onClick={goBackPage}>&lt;</div>
        <div className="pagination-current">1</div>
        <div className="pagination-total">/17</div>
        <div className="pagination-btn-next" onClick={goNextPage}>&gt;</div>
        <select className="pagination-per-page">
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

function returnInitialItems(){
    /** @namespace currentItem.thumbnail **/
    /** @namespace currentItem.price **/
    /** @namespace items.products **/
    const [items, setItems] = useState([]);
    const list = [];
    useEffect(() => {
        const url = "https://dummyjson.com/products?limit=6";
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

function ProductsDisplay({itemsList}){
    return(
        <>
            <div className="products-display" id="list-of-products">
                {itemsList}
            </div>
        </>
    )
}

function Preview(){
    return (
        <>
            <div id="background-cover" onClick="closePreview()" onMouseOver="hideSmallCart()"></div>
            <div id="product-preview" onMouseOver="hideSmallCart()">
                <img className="preview-image" alt="Product Preview" src="https://picsum.photos/300/400" />
                    <div className="preview-title">##TITLE##</div>
                    <div className="preview-description">##DESCRIPTION##</div>
                    <div className="preview-price">##PRICE##</div>
                    <div className="preview-add-to-cart" onClick="addToCartExtern(this)" id="previewbtn">🛒 ADD</div>
                    <div className="preview-rating">
                        <span className="star fa fa-star" id="star-1"></span>
                        <span className="star fa fa-star" id="star-2"></span>
                        <span className="star fa fa-star" id="star-3"></span>
                        <span className="star fa fa-star" id="star-4"></span>
                        <span className="star fa fa-star" id="star-5"></span>
                    </div>
                    <div className="preview-exit" onClick="closePreview()">X</div>
                    <div className="preview-left-pic" onClick="leftPic()">&lt;</div>
                    <div className="preview-right-pic" onClick="rightPic()">&gt;</div>
            </div>
        </>
    )
}

export default function Display() {
    console.clear();
    let itemsList = returnInitialItems();
    return (
        <>
          <Header />
          <ProductsDisplay itemsList={itemsList}/>
          <PaginationBar />
          <Footer />
        </>
    )
}
