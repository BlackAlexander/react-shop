export default function OrderDisplay({miniOrdersList}){
    return (
        <>
            <h2 className="orders-title">YOUR ORDERS</h2>
            <div className="order-display-container">
                {miniOrdersList}
            </div>
        </>
    )
}