import Header from "../DisplayPage/DisplayHeader";
import CartFooter from "../CartPage/CartFooter";
import OrderDetails from "./OrderDetails";
import './Place.css'
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {getToken, getUserID} from "../DisplayPage/DisplayAuxJS";
import PlaceProduct from "./PlaceProduct";

function processOrder(itemslist){
    let list = [];
    if (itemslist === undefined){
        return [];
    }
    for (let i = 0; i < itemslist.length; i++){
        const currentItem = itemslist[i];
        list.push(PlaceProduct({
            itemId: currentItem.id,
            itemPic: currentItem.thumbnail,
            itemPrice: currentItem.price,
            itemQuantity: currentItem.quantity,
            itemTitle: currentItem.title,
        }))
    }
    return list;
}

export default function Place() {
    const [paymentMethod, setPaymentMethod] = useState("NONE"),
        [cartList, setCartList] = useState([]),
        navigate = useNavigate();
    let shippingAddress;

    useEffect( () => {
        let fetchUrl = "http://127.0.0.1:42069/cart/";
        const IDToUse = getUserID();
        fetchUrl += IDToUse;
        fetch(fetchUrl, {
            method: 'GET',
            headers: {
                'Internship-Auth': getToken(),
            },
        })
            .then(response => response.json())
            .then(data => {
                setCartList(processOrder(data.products));
            })
    }, [])

    function switchPaymentTo(newState){
        setPaymentMethod(newState);
        if (newState === "CASH"){
            document.querySelector(".order-data-payment-cash").classList.add("order-payment-selected");
            document.querySelector(".order-data-payment-card").classList.remove("order-payment-selected");
        }
        if (newState === "CARD"){
            document.querySelector(".order-data-payment-card").classList.add("order-payment-selected");
            document.querySelector(".order-data-payment-cash").classList.remove("order-payment-selected");
        }
    }

    async function sendRequests(){
        const IDToUse = getUserID();
        let result = false;
        try {
            await fetch(`http://127.0.0.1:42069/order/create/${IDToUse}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Internship-Auth': getToken(),
                },
                body: JSON.stringify({
                    address: document.querySelector(".order-data-address-input").value,
                    payment: paymentMethod
                })
            }).then(response => response.json()).then((data) => {
                if (String(data) === "Order placed successfully"){
                    result = true;
                }
            });
        } catch (error) {
            console.error("Place order fail: ", error);
        }
        return result;
    }

    async function placeOrder() {
        shippingAddress = document.querySelector(".order-data-address-input").value;
        if (paymentMethod === "NONE") {
            window.alert("Please select a payment method.")
        } else if (shippingAddress === "") {
            window.alert("Please enter a shipping address.")
        } else {
            const returnedResult = await sendRequests();
            console.log(returnedResult);
            if (returnedResult === true) {
                window.alert("Order placed successfully.")
                navigate('/shop');
            } else {
                window.alert("We could not place your order.")
            }
        }
    }

    return (
        <>
            <Header />
            <OrderDetails place={() => {placeOrder().then()}} changeTo={switchPaymentTo} productsToOrder={cartList}/>
            <CartFooter />
        </>
    )
}