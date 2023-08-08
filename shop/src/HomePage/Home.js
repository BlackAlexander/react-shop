import './Home.css'
import {Link} from "react-router-dom";

export default function Home() {
    return (
        <>
            <div className="home-background"></div>
            <div className="home-welcom">
                <div className="home-hello">hello.</div>
                <Link to="/login" style={{ textDecoration: 'none' }}>
                    <div className="home-enter"> </div>
                </Link>
            </div>
        </>
    )
}