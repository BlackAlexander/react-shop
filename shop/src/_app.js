import Display from './DisplayPage/Display.js'
import Login from './LoginPage/Login.js'
import Home from './HomePage/Home.js'
import Account from './AccountPage/Account.js'
import {Route, Routes} from "react-router-dom";

export default function App(){
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/shop" element={<Display />} />
            <Route path="/account" element={<Account />} />
        </Routes>
    )
}