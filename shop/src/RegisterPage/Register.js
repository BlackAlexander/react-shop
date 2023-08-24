import {Link} from "react-router-dom";
import './Register.css'

export default function Register() {
    return (
        <>
            <div className="home-background"></div>
            <div className="register-holder">
                <div className="register-title">register</div>
                <div className="register-name">
                    <div className="register-name-title">
                        name
                    </div>
                    <input type="text" className="register-name-input"/>
                </div>
                <div className="register-email">
                    <div className="register-email-title">
                        email
                    </div>
                    <input type="text" className="register-email-input"/>
                </div>
                <div className="register-password">
                    <div className="register-password-title">
                        password
                    </div>
                    <input type="password"  className="register-password-input" defaultValue=""/>
                </div>
                <div className="register-enter" onClick={() => {}}>
                    <Link to="/shop" style={{ textDecoration: 'none', color: 'white' }}>
                        register
                    </Link>
                </div>
            </div>
        </>
    )
}