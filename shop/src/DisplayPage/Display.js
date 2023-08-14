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
import Review from "./Review";

export default function Display() {
    // console.clear();
    const [url, setUrl] = useState("");
    const [key, setKey] = useState(0);
    const [smallitems, setSmallitems] = useState([])
    const [reviewIsOn, setReviewIsOn] = useState(false);
    const [idToReview, setIdToReview] = useState(1);
    const [titleToReview, setTitleToReview] = useState("");

    useEffect(()=>{
        setUrl(getURL());
    }, [])

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
            <CategoryBar updateurl={updateurl}/>
            <AccountBar />
            <SearchBar updateurl={updateurl}/>
            {shouldRenderProducts && <ProductsDisplay fetchUrl={url} key={key} showreview = {showreview}/>}
            <PaginationBar updateurl={updateurl}/>
            <div id="cart-popup">item added to cart</div>
            {reviewIsOn && <Review idToReview={idToReview} showreview={showreview} titleToReview={titleToReview}/>}
            {/*<Review idToReview={idToReview} showreview={showreview}/>*/}
            <Footer />
        </>
    )
}