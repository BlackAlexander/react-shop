
export default function CartSummary({handleNavigateToPlace}){
    return <div className="cart-summary">
        <div className="summary-total">TOTAL</div>
        <div className="summary-total-value">0</div>
        <div className="summary-items">Items</div>
        <div className="summary-items-value">0</div>
        <div className="summary-quantity">Quantity</div>
        <div className="summary-quantity-value">0</div>
        <div className="summary-price">PRICE</div>
        <div className="summary-price-value">0</div>
        <div className="summary-order" onClick={handleNavigateToPlace}>Proceed to payment</div>
    </div>
}