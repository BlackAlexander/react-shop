import './Display.css'
import {useEffect, useState} from "react";
import {getURL} from "./DisplayAuxJS";
import Header from "./DisplayHeader";
import CategoryBar from "./DisplayCategoryBar";
import SearchBar from "./DisplaySearchBar";
import ProductsDisplay from "./DisplayProductsDisplay";
import PaginationBar from "./DisplayPaginationBar";
import Footer from "./DisplayFooter";
import AccountBar from "./DisplayAccount.js"
import Review from "./DisplayReview";

export default function Display() {
    // console.clear();
    const [url, setUrl] = useState("");
    const [key, setKey] = useState(0);
    const [key2, setKey2] = useState("");
    const [smallitems, setSmallitems] = useState([])
    const [reviewIsOn, setReviewIsOn] = useState(false);
    const [idToReview, setIdToReview] = useState(1);
    const [titleToReview, setTitleToReview] = useState("");
    const [count, setCount] = useState(0);

    useEffect(() => {
        fetch("http://127.0.0.1:42069/products/count")
            .then(response => response.json())
            .then(data => {
                setCount(parseInt(data));
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
        setUrl(getURL(count));
        let newKey = "Pg" + String(count);
        setKey2(newKey);
    }, []);

    const updateurl = (newurl) => {
        setUrl(newurl);
        setKey(key + 1);
    }

    const updatesmall = (newsmall) => {
        setSmallitems(newsmall);
    }

    const showreview = (newid, newtitle) => {
        setIdToReview(newid.slice(4));
        setTitleToReview(newtitle);
        setReviewIsOn(true)
        if (newid === "-1"){
            setReviewIsOn(false);
        }
    }

    const shouldRenderProducts = String(url.slice(0, 4)) === "http";
    return (
        <>
            <Header updatesmall={updatesmall}/>
            <CategoryBar updateurl={updateurl} count={count}/>
            <AccountBar />
            <SearchBar updateurl={updateurl} count={count}/>
            {shouldRenderProducts && <ProductsDisplay fetchUrl={url} key={key} showreview = {showreview}/>}
            <PaginationBar updateurl={updateurl} count={count} key={key2}/>
            <div id="cart-popup">item added to cart</div>
            {reviewIsOn && <Review idToReview={idToReview} showreview={showreview} titleToReview={titleToReview}/>}
            {/*<Review idToReview={idToReview} showreview={showreview}/>*/}
            <Footer />
        </>
    )
}