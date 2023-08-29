

export default function OrderProduct({itemId, itemPic, itemTitle, itemQuantity, itemPrice, forkey, orderId, returnProduct, isDelivered, listOfReturned}){
    const newPrice = "$" + String(itemPrice);
    const newQuantity = "x" + String(itemQuantity);
    const newKey = "order-product-" + String(forkey);
    console.log(listOfReturned);
    return <div className="order-product" id={newKey} key={newKey}>
        <img src={itemPic} alt="order product" className="order-product-pic"/>
        <div className="order-product-title">{itemTitle}</div>
        <div className="order-product-price">{newPrice}</div>
        <div className="order-product-quantity">{newQuantity}</div>
        {(isDelivered) && <div className="order-product-return" onClick={async () => {
            await returnProduct(itemId, orderId)
        }}>↩️</div>}
    </div>
}