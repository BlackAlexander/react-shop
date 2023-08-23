import CartHeader from "../CartPage/CartHeader";
import CartFooter from "../CartPage/CartFooter";
import OrderPreview from "../OrdersPage/OrderPreview";
import OrderDisplay from "../OrdersPage/OrderDisplay";
import './Orders.css'


export default function Orders() {
    return (
        <>
            <CartHeader />
            <OrderDisplay />
            <OrderPreview />
            <CartFooter />
        </>
    )
}