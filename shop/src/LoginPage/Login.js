import './Login.css'
import {Link} from "react-router-dom";
import {useAuth} from "./auth.js"
import {useEffect, useState} from "react";

async function loginGetToken(usermail, password) {
    const url = 'http://vlad-matei.thrive-dev.bitstoneint.com/wp-json/internship-api/v1/login';
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
    const [response, setResponse] = useState(null);
    const auth = useAuth();

    const irinaLogIn = async () => {
        const l_email = document.querySelector(".login-email-input").value;
        const l_password = document.querySelector(".login-password-input").value;

        try {
            const responseData = await loginGetToken(l_email, l_password);
            setResponse(responseData);
            const userData = {
                token: responseData.token, // Make sure to use the correct key from the response
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
            </div>
        </>
    )
}