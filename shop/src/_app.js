import Display from './DisplayPage/Display.js'
import Login from './LoginPage/Login.js'
import Home from './HomePage/Home.js'
import Account from './AccountPage/Account.js'
import {Route, Routes} from "react-router-dom";
import {AuthProvider, ProtectedRoute} from "./LoginPage/auth";
import Cart from "./CartPage/Cart";

export default function App(){
    return (
        // <BrowserRouter>
            <AuthProvider>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/shop" element={
                        <ProtectedRoute>
                            <Display />
                        </ProtectedRoute>
                    } />
                    <Route path="/account" element={
                        <ProtectedRoute>
                            <Account />
                        </ProtectedRoute>
                    } />
                    <Route path="/cart" element={
                        <ProtectedRoute>
                            <Cart />
                        </ProtectedRoute>
                    } />
                </Routes>
            </AuthProvider>
        // </BrowserRouter>
    )
}