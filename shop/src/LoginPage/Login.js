import './Login.css'
import {Link} from "react-router-dom";
import { useAuth } from "./auth.js"

export default function Login() {
    const auth = useAuth();
    // let l_username = document.querySelector(".login-email-input").value;
    // let l_email = document.querySelector(".login-password-input").value;
    // console.log(l_username);
    // console.log(l_email);

    const irinaLogIn = async () => {
        const userData = {
            token: "hehehe"
        };

        await auth.login(userData);
    };
    return (
        <>
            <div className="home-background"></div>
            <div className="login-holder">
                <div className="login-title">log in</div>
                <div className="login-email">
                    <div className="login-email-title">
                        email
                    </div>
                    <input type="text" className="login-email-input"/>
                </div>
                <div className="login-password">
                    <div className="login-password-title">
                        password
                    </div>
                    <input type="password"  className="login-password-input"/>
                </div>
                <div className="login-enter" onClick={irinaLogIn}>
                {/*<div className="login-enter ">*/}
                    <Link to="/shop" style={{ textDecoration: 'none', color: 'white' }}>
                    enter
                    </Link>
                </div>
            </div>
        </>
    )
}