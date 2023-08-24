import CartHeader from "../CartPage/CartHeader";
import CartFooter from "../CartPage/CartFooter";
import OrderDetails from "./OrderDetails";
import './Place.css'


export default function Place() {
    return (
        <>
            <CartHeader />
            <OrderDetails />
            <CartFooter />
        </>
    )
}