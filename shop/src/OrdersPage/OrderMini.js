export default function OrderMini({index, number, status, quantity, date, total, changeOrderTo}){
    const newId = "order-" + String(index);
    let products = String(quantity);
    if (parseInt(quantity) === 1){
        products += " product";
    } else {
        products += " products";
    }
    return <div className="order-item" id={newId} key={newId} onClick={() => {changeOrderTo(number)}}>
        <div className="order-index">{index}</div>
        <div className="order-number">{number}</div>
        <div className="order-quantity">{products}</div>
        <div className="order-status">{status}</div>
        <div className="order-date">{date}</div>
        <div className="order-total">{total}</div>
    </div>
}