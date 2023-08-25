export default function OrderProduct({itemPic, itemTitle, itemQuantity, itemPrice, forkey}){
    const newPrice = "$" + String(itemPrice);
    const newQuantity = "x" + String(itemQuantity);
    const newKey = "order-product-" + String(forkey);
    return <div className="order-product" id={newKey} key={newKey}>
        <img src={itemPic} alt="order product" className="order-product-pic"/>
        <div className="order-product-title">{itemTitle}</div>
        <div className="order-product-price">{newPrice}</div>
        <div className="order-product-quantity">{newQuantity}</div>
    </div>
}