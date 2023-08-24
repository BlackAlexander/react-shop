export default function OrderDetails(){
    return (
        <>
            <div className="cool-fire-animation"></div>
            <div className="call-to-order">ORDER NOW!</div>
            <div className="call-to-order-advanced">or I will come to your house and I will r</div>
            <div className="order-data-container">
                <div className="order-data-address">Address:</div>
                <textarea className="order-data-address-input" spellCheck="false"/>
                <div className="order-data-payment">Payment:</div>
                <div className="order-data-payment-card">CARD</div>
                <div className="order-data-payment-cash order-payment-selected">CASH</div>
                <div className="order-friendly-picture"></div>
                <div className="place-order-products">
                    <div className="order-product" id="order-product-1">
                        <img src="https://picsum.photos/80/100" alt="order product" className="order-product-pic"/>
                        <div className="order-product-title">Burj Khalifa</div>
                        <div className="order-product-price">$1092.50</div>
                        <div className="order-product-quantity">x230</div>
                    </div>
                    <div className="order-product" id="order-product-2">
                        <img src="https://picsum.photos/80/101" alt="order product" className="order-product-pic"/>
                        <div className="order-product-title">Mia Tyler</div>
                        <div className="order-product-price">$593.4</div>
                        <div className="order-product-quantity">x1</div>
                    </div>
                    <div className="order-product" id="order-product-3">
                        <img src="https://picsum.photos/89/100" alt="order product" className="order-product-pic"/>
                        <div className="order-product-title">Bob</div>
                        <div className="order-product-price">$293.4</div>
                        <div className="order-product-quantity">x4</div>
                    </div>
                    <div className="order-product" id="order-product-4">
                        <img src="https://picsum.photos/81/100" alt="order product" className="order-product-pic"/>
                        <div className="order-product-title">Love</div>
                        <div className="order-product-price">$0</div>
                        <div className="order-product-quantity">x0</div>
                    </div>
                </div>
                <div className="order-data-total">Total: $1234.56</div>
                <div className="order-button">place order</div>
            </div>
        </>
    )
}