import logo from "../images/simple-logo-no-bg.png";
import {Link} from "react-router-dom";

export default function CartHeader(){
    return <header className="giga-header">
        <div className="home-page">
            <img src={logo} alt="giga image logo" className="giga-logo" />
        </div>
        <h1 className="giga-title">
            <Link to="/" style={{ textDecoration: 'none' , color: '#262626' }}>
                GIGA Image
            </Link>
        </h1>
        <Link to="/shop" className="cart-in-title"  style={{ textDecoration: 'none' , color: '#151515' }}>
            &lt;back&gt;
        </Link>
    </header>
}