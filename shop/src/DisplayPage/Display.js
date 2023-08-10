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

export default function Display() {
    // console.clear();
    const [url, setUrl] = useState("");
    const [key, setKey] = useState(0);
    const [smallitems, setSmallitems] = useState([])

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

    return (
        <>
            <Header updatesmall={updatesmall}/>
            <CategoryBar updateurl={updateurl}/>
            <AccountBar />
            <SearchBar updateurl={updateurl}/>
            <ProductsDisplay fetchUrl={url} key={key}/>
            <PaginationBar updateurl={updateurl}/>
            <div id="cart-popup">item added to cart</div>
            <Footer />
        </>
    )
}