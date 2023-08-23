export default function OrderDisplay(){
    return (
        <>
            <h2 className="orders-title">YOUR ORDERS</h2>
            <div className="order-display-container">
                <div className="order-item" id="order-1" onClick={() => {console.log("hi");}}>
                    <div className="order-index">1</div>
                    <div className="order-number">136752</div>
                    <div className="order-quantity">3 products</div>
                    <div className="order-status">paid</div>
                    <div className="order-date">23.10.2023</div>
                    <div className="order-total">$18930.25</div>
                </div>
                <div className="order-item" id="order-2" onClick={() => {console.log("hi");}}>
                    <div className="order-index">2</div>
                    <div className="order-number">124798</div>
                    <div className="order-quantity">2 products</div>
                    <div className="order-status">in delivery</div>
                    <div className="order-date">19.10.2023</div>
                    <div className="order-total">$280</div>
                </div>
                <div className="order-item" id="order-3" onClick={() => {console.log("hi");}}>
                    <div className="order-index">3</div>
                    <div className="order-number">326839</div>
                    <div className="order-quantity">14 products</div>
                    <div className="order-status">delivered</div>
                    <div className="order-date">19.07.2023</div>
                    <div className="order-total">$3830.8</div>
                </div>
                <div className="order-item" id="order-4" onClick={() => {console.log("hi");}}>
                    <div className="order-index">4</div>
                    <div className="order-number">283956</div>
                    <div className="order-quantity">10 products</div>
                    <div className="order-status">delivered</div>
                    <div className="order-date">13.06.2023</div>
                    <div className="order-total">$123.20</div>
                </div>
                <div className="order-item" id="order-5" onClick={() => {console.log("hi");}}>
                    <div className="order-index">5</div>
                    <div className="order-number">545823</div>
                    <div className="order-quantity">7 products</div>
                    <div className="order-status">delivered</div>
                    <div className="order-date">19.03.2023</div>
                    <div className="order-total">$54927.15</div>
                </div>
                <div className="order-item" id="order-6" onClick={() => {console.log("hi");}}>
                    <div className="order-index">6</div>
                    <div className="order-number">153964</div>
                    <div className="order-quantity">1 product</div>
                    <div className="order-status">delivered</div>
                    <div className="order-date">24.12.2022</div>
                    <div className="order-total">$1</div>
                </div>
                <div className="order-item" id="order-7" onClick={() => {console.log("hi");}}>
                    <div className="order-index">7</div>
                    <div className="order-number">984321</div>
                    <div className="order-quantity">2 products</div>
                    <div className="order-status">delivered</div>
                    <div className="order-date">23.12.2022</div>
                    <div className="order-total">$14.8</div>
                </div>
                <div className="order-item" id="order-8" onClick={() => {console.log("hi");}}>
                    <div className="order-index">8</div>
                    <div className="order-number">547923</div>
                    <div className="order-quantity">1 product</div>
                    <div className="order-status">delivered</div>
                    <div className="order-date">09.11.2022</div>
                    <div className="order-total">$188230.2</div>
                </div>
            </div>
        </>
    )
}