import './Login.css'
import {Link} from "react-router-dom";
import {useAuth} from "./auth.js"

async function loginGetToken(usermail, password) {
    const url = 'http://127.0.0.1:42069/user';
    const data = {
        email: usermail,
        password: password,
    };

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        return await response.json();
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

export default function Login() {
    const auth = useAuth();

    const irinaLogIn = async () => {
        const l_email = document.querySelector(".login-email-input").value;
        const l_password = document.querySelector(".login-password-input").value;

        try {
            const responseData = await loginGetToken(l_email, l_password);
            const userData = {
                token: responseData.token,
                id: responseData.id
            };
            await auth.login(userData);
        } catch (error) {
            console.error('API call failed:', error);
        }
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
                    <input type="text" className="login-email-input" defaultValue="test3@mail.com"/>
                </div>
                <div className="login-password">
                    <div className="login-password-title">
                        password
                    </div>
                    <input type="password"  className="login-password-input" defaultValue="BUA8Mwi3XePJYda6cE)kdbHt"/>
                </div>
                <div className="login-enter" onClick={irinaLogIn}>
                {/*<div className="login-enter ">*/}
                    <Link to="/shop" style={{ textDecoration: 'none', color: 'white' }}>
                    enter
                    </Link>
                </div>
                <div className="login-register">
                {/*<div className="login-enter ">*/}
                    <Link to="/register" style={{ textDecoration: 'none', color: 'white' }}>
                    register
                    </Link>
                </div>
            </div>
        </>
    )
}