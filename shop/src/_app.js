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

function returnItems(){
    const [items, setItems] = useState([]);
    const list = [];
    useEffect(() => {
        const url = "https://dummyjson.com/products?limit=16";

        fetch(url)
            .then(response => response.json())
            .then(data => {
                setItems(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);
    for (let i = 0; i < items.products.length; i++){
        const currentItem = items.products[i];
        list.push(Product({
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

export default function Display() {
    console.clear();
    let itemsList = returnItems();
    return (
        <>
          <Header />
          <ProductsDisplay itemsList={itemsList}/>
        </>
    )
}
