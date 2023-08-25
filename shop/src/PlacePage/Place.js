import Header from "../DisplayPage/DisplayHeader";
import CartFooter from "../CartPage/CartFooter";
import OrderDetails from "./OrderDetails";
import './Place.css'
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {getToken, getUserID} from "../DisplayPage/DisplayAuxJS";


export default function Place() {
    const [paymentMethod, setPaymentMethod] = useState("NONE");
    let shippingAddress;
    const navigate = useNavigate();

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
            <OrderDetails place={() => {placeOrder().then()}} changeTo={switchPaymentTo}/>
            <CartFooter />
        </>
    )
}