import CartHeader from "../CartPage/CartHeader";
import CartFooter from "../CartPage/CartFooter";
import React from "react";
import './Returns.css'

export default function Returns(){
    return (<>
        <CartHeader />
        <h2 className="returns-title">YOUR RETURNS</h2>
        <div className="returns-container">

        </div>
        <CartFooter />
    </>)
}