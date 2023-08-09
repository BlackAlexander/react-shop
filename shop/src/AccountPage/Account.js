import './Account.css'
import Header from "../DisplayPage/DisplayHeader";
import {decodeToken} from "../DisplayPage/DisplayAuxJS.js";
import {useEffect, useState} from "react";

export default function Login() {
    const [mail, setMail] = useState("johndoe@mail.com");
    useEffect(()=>{
        setMail(decodeToken());
    }, [])
    return (
        <>
            <Header />
            <div className="account-holder">
                <div className="account-picture"></div>
                <div className="account-title">name</div>
                <div className="account-value">John Doe</div>
                <div className="account-title">email</div>
                <div className="account-value">{mail}</div>
                <div className="account-title">phone</div>
                <div className="account-value">0723 456 789</div>
                <div className="account-title">address</div>
                <div className="account-value">Calea Turzii</div>
            </div>
        </>
    )
}