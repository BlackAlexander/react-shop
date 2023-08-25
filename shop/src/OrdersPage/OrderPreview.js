import OrderProduct from "./OrderProduct";

export default function OrderPreview({number, date, status, address, payment, products}){
    let orderno = "ORDER no. ";
    orderno += String(number);
    let statusnew = "status: ";
    statusnew += status;
    let priceSum = 0;
    for (let i in products){
        priceSum += products[i].price;
    }
    const totalno = "Total: $" + String(priceSum);

    let listOfProducts = [];
    for (let i in products){
        const currentItem = products[i];
        listOfProducts.push(OrderProduct({
            itemId: currentItem.id,
            itemPic: currentItem.thumbnail,
            itemPrice: currentItem.price,
            itemQuantity: currentItem.quantity,
            itemTitle: currentItem.title,
            forkey: i
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
                    <div className="order-preview-payment">Card Payment</div>
                    <div className="order-card-data">
                        <div className="order-preview-cardemoji">💳</div>
                        <div className="order-preview-cardnumber">4485 1046 4928 8103</div>
                        <div className="order-preview-cardexpire">3/2028</div>
                        <div className="order-preview-cardcvv">461</div>
                    </div>
                    <div className="order-preview-total">{totalno}</div>
                </div>
            </div>
        </>
    )
}