import {undone} from "../CartPage/CartAuxJS";

export default function CartSummary(){
    return <div className="cart-summary">
        <div className="summary-total">TOTAL</div>
        <div className="summary-total-value">##VALUE##</div>
        <div className="summary-items">Items</div>
        <div className="summary-items-value">##VALUE##</div>
        <div className="summary-quantity">Quantity</div>
        <div className="summary-quantity-value">##VALUE##</div>
        <div className="summary-price">PRICE</div>
        <div className="summary-price-value">##VALUE##</div>
        <div className="summary-order" onClick={undone}>Proceed to payment</div>
    </div>
}