import './Cart.css'
import CartHeader from "../CartPage/CartHeader";
import CartDisplay from "../CartPage/CartDisplay";
import CartSummary from "../CartPage/CartSummary";
import CartFooter from "../CartPage/CartFooter";

export default function Cart(){
    return (
        <>
            <CartHeader />
            <CartDisplay />
            <CartSummary />
            <CartFooter />
        </>
    )
}