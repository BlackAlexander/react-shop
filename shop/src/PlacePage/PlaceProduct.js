

export default function PlaceProduct({itemId, itemPic, itemTitle, itemQuantity, itemPrice}) {
    const newId = "order-product-" + String(itemId);
    const newPrice = "$" + String(itemPrice);
    const newQuantity = "x" + String(itemQuantity);
    return <div className="order-product" id={newId} key={newId}>
        <img src={itemPic} alt="order product" className="order-product-pic"/>
        <div className="order-product-title">{itemTitle}</div>
        <div className="order-product-price">{newPrice}</div>
        <div className="order-product-quantity">{newQuantity}</div>
    </div>
}