import {Link} from "react-router-dom";
import './Register.css'
import {useAuth} from "../LoginPage/auth";

async function performRegister(usermail, password, name){
    const url = 'http://127.0.0.1:42069/user/register';
    const data = {
        email: usermail,
        name: name,
        password: password
    }
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });

        return await response.json();
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

export default function Register() {
    const auth = useAuth();

    const irinaRegister = async() => {
        const l_email = document.querySelector(".register-email-input").value;
        const l_password = document.querySelector(".register-password-input").value;
        const l_name = document.querySelector(".register-name-input").value;
        try {
            const responseData = await performRegister(l_email, l_password, l_name);
            const userData = {
                token: responseData.token, // Make sure to use the correct key from the response
                id: responseData.id
            };
            await auth.login(userData);
        } catch (error) {
            console.error('API call failed:', error);
        }
    }

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
                <div className="register-enter" onClick={async () => {
                    await irinaRegister();
                }}>
                    <Link to="/shop" style={{ textDecoration: 'none', color: 'white' }}>
                        register
                    </Link>
                </div>
            </div>
        </>
    )
}