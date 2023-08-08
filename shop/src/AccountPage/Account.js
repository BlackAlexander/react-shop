import './Account.css'
import Header from "../DisplayPage/DisplayHeader";

export default function Login() {
    return (
        <>
            <Header />
            <div className="account-holder">
                <div className="account-picture"></div>
                <div className="account-title">name</div>
                <div className="account-value">John Doe</div>
                <div className="account-title">email</div>
                <div className="account-value">johndoe@mail.com</div>
                <div className="account-title">phone</div>
                <div className="account-value">0723 456 789</div>
                <div className="account-title">address</div>
                <div className="account-value">Calea Turzii</div>
            </div>
        </>
    )
}