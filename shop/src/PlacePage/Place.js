import Header from "../DisplayPage/DisplayHeader";
import CartFooter from "../CartPage/CartFooter";
import OrderDetails from "./OrderDetails";
import './Place.css'
import {useState} from "react";


export default function Place() {
    const [paymentMethod, setPaymentMethod] = useState("NONE");
    let shippingAddress;

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

    function placeOrder(){
        shippingAddress = document.querySelector(".order-data-address-input").value;
        if(paymentMethod === "NONE"){
            window.alert("Please select a payment method.")
        } else if(shippingAddress === ""){
            window.alert("Please enter a shipping address.")
        }
    }

    return (
        <>
            <Header />
            <OrderDetails place={placeOrder} changeTo={switchPaymentTo}/>
            <CartFooter />
        </>
    )
}