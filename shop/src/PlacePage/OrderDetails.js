export default function OrderDetails({changeTo, place, productsToOrder, totalPrice}){

    return (
        <>
            <div className="cool-fire-animation"></div>
            <div className="call-to-order">ORDER NOW!</div>
            <div className="call-to-order-advanced">or I will come to your house and I will r</div>
            <div className="order-data-container">
                <div className="order-data-address">Address:</div>
                <textarea className="order-data-address-input" spellCheck="false"/>
                <div className="order-data-payment">Payment:</div>
                <div className="order-data-payment-card" onClick={()=>{changeTo("CARD")}}>CARD</div>
                <div className="order-data-payment-cash" onClick={()=>{changeTo("CASH")}}>CASH</div>
                <div className="order-friendly-picture"></div>
                <div className="place-order-products">
                    {productsToOrder}
                </div>
                <div className="order-data-total">{totalPrice}</div>
                <div className="order-button" onClick={place}>place order</div>
            </div>
        </>
    )
}