import logo from "../images/simple-logo-no-bg.png";

export default function Header(){
    return (
        <>
            <header className="giga-header">
                <div className="home-page">
                    <img src={logo} alt="giga image logo" className="giga-logo" />
                </div>
                <h1 className="giga-title">
                    GIGA Image
                </h1>
                <a href="" className="cart-in-title">
                    {/*<a href="" className="cart-in-title" onMouseOver="showSmallCart()">*/}
                    🛒Cart
                </a>
            </header>
        </>
    )
}