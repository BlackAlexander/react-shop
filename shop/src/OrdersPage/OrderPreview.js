export default function OrderPreview({number, date, status, address, payment, products}){
    console.log(number);
    return (
        <>
            <div className="order-preview-container">
                <div className="order-header">
                    <div className="order-preview-number">ORDER no. 136752</div>
                    <div className="order-preview-status">status: paid</div>
                    <div className="order-preview-date">23.10.2023</div>
                    <div className="order-preview-address">Calea Turzii 36</div>
                </div>
                <div className="order-products">
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
                <div className="order-footer">
                    <div className="order-preview-payment">Card Payment</div>
                    <div className="order-card-data">
                        <div className="order-preview-cardemoji">💳</div>
                        <div className="order-preview-cardnumber">4485 1046 4928 8103</div>
                        <div className="order-preview-cardexpire">3/2028</div>
                        <div className="order-preview-cardcvv">461</div>
                    </div>
                    <div className="order-preview-total">Total: $18930.25</div>
                </div>
            </div>
        </>
    )
}