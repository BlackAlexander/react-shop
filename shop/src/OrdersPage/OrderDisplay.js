import {Link} from "react-router-dom";

export default function OrderDisplay({miniOrdersList}){
    return (
        <>
            <h2 className="orders-title">YOUR ORDERS</h2>
            <Link to="/returns" className="orders-returns" style={{ textDecoration: 'none' , color: '#262626' }}>
            </Link>
            <div className="order-display-container">
                {miniOrdersList}
            </div>
        </>
    )
}