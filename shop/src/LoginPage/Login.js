import './Login.css'

export default function Login() {
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
                <div className="login-enter">
                    enter
                </div>
            </div>
        </>
    )
}