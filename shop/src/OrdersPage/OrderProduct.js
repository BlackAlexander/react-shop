

export default function OrderProduct({itemId, itemPic, itemTitle, itemQuantity, itemPrice, forkey, orderId, returnProduct, isDelivered, listOfReturned}){
    const newPrice = "$" + String(itemPrice),
        newQuantity = "x" + String(itemQuantity),
        newKey = "order-product-" + String(forkey);
    let isReturned = false;
    for (let i in listOfReturned){
        if (String(listOfReturned[i].productId) === String(itemId)) {
            isReturned = true;
        }
    }
    return <div className="order-product" id={newKey} key={newKey}>
        <img src={itemPic} alt="order product" style={{
            filter: isReturned ? 'grayscale(100%)' : 'grayscale(0%)'
        }} className="order-product-pic"/>
        <div className="order-product-title" style={{
            textDecoration: isReturned ? 'line-through' : 'none'
        }}>{itemTitle}</div>
        <div className="order-product-price">{newPrice}</div>
        <div className="order-product-quantity">{newQuantity}</div>
        {(isDelivered && !isReturned) && <div className="order-product-return" onClick={async () => {
            await returnProduct(itemId, orderId)
        }}>↩️</div>}
    </div>
}