export default function OrderDetails(){
    return (
        <>
            <div className="cool-fire-animation"></div>
            <div className="call-to-order">ORDER NOW!</div>
            <div className="call-to-order-advanced">or I will come to your house and I will r</div>
            <div className="order-data-container">
                <div className="order-data-address">Address:</div>
                <input type="text" className="order-data-address-input" />
                <div className="order-data-payment">Payment:</div>
                <div className="order-data-payment-card">CARD</div>
                <div className="order-data-payment-cash">CASH</div>
                <div className="order-friendly-picture"></div>
                <div className="place-order-products">

                </div>
                <div className="order-data-total">Total: $1234.56</div>
                <div className="order-button">place order</div>
            </div>
        </>
    )
}