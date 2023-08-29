import OrderProduct from "./OrderProduct";

export default function OrderPreview({number, date, status, address, payment, products}){
    let orderno = "ORDER no. ";
    orderno += String(number);
    let statusnew = "status: ";
    statusnew += status;
    let priceSum = 0;
    for (let i in products){
        priceSum += (products[i].price * products[i].quantity);
    }
    const totalno = "Total: $" + String(priceSum);

    function returnProduct(productId, orderID){
        let reason = prompt("Reason for your return:");
        if (reason !== null && reason.length !== 0){
            console.log(productId, orderID, reason)
        }
    }

    let listOfProducts = [];
    for (let i in products){
        const currentItem = products[i];
        listOfProducts.push(OrderProduct({
            itemId: currentItem.id,
            itemPic: currentItem.thumbnail,
            itemPrice: currentItem.price,
            itemQuantity: currentItem.quantity,
            itemTitle: currentItem.title,
            orderId: number,
            forkey: i,
            returnProduct: returnProduct
        }))
    }

    return (
        <>
            <div className="order-preview-container">
                <div className="order-header">
                    <div className="order-preview-number">{orderno}</div>
                    <div className="order-preview-status">{statusnew}</div>
                    <div className="order-preview-date">{date}</div>
                    <div className="order-preview-address">{address}</div>
                </div>
                <div className="order-products">
                    {listOfProducts}
                </div>
                <div className="order-footer">
                    {payment === "CARD" ? (
                            <>
                                <div className="order-preview-payment">Card Payment</div>
                                <div className="order-card-data">
                                    <div className="order-preview-cardemoji">💳</div>
                                    <div className="order-preview-cardnumber">4485 1046 4928 8103</div>
                                    <div className="order-preview-cardexpire">3/2028</div>
                                    <div className="order-preview-cardcvv">461</div>
                                </div>
                            </>
                        ) : (
                        <>
                            <div className="order-preview-payment">Cash Payment</div>
                            <div className="order-card-data">
                                <div className="order-preview-cardemoji">💸</div>
                                <div className="order-preview-cardnumber">Cash payments are not recommended.</div>
                                <div className="order-preview-cardexpire"></div>
                                <div className="order-preview-cardcvv"></div>
                            </div>
                        </>
                    )}

                    <div className="order-preview-total">{totalno}</div>
                </div>
            </div>
        </>
    )
}