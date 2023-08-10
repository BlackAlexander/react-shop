import {Link} from "react-router-dom";

export default function AccountBar(){
    return <div className="account-bar">
        <div className="account-icon">😋</div>
        <Link to="/account" className="account-button" style={{textDecoration: 'None', color: 'Black'}}>Account</Link>
    </div>
}