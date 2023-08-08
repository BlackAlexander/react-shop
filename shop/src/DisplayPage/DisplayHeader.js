import logo from "../images/simple-logo-no-bg.png";
import {Link} from "react-router-dom";

export default function Header(){
    return (
        <>
            <header className="giga-header">
                <div className="home-page">
                    <img src={logo} alt="giga image logo" className="giga-logo" />
                </div>
                <h1 className="giga-title">
                    <Link to="/" style={{ textDecoration: 'none' , color: '#262626' }}>
                        GIGA Image
                    </Link>
                </h1>
                <Link to="/cart" className="cart-in-title">
                    {/*<a href="" className="cart-in-title" onMouseOver="showSmallCart()">*/}
                    🛒Cart
                </Link>
            </header>
        </>
    )
}