import './Display.css'
import Header from './DisplayHeader.js'
import Footer from './DisplayFooter.js'
import PaginationBar from "./DisplayPaginationBar.js";
import ProductsDisplay from "./DisplayProductsDisplay.js";
import CategoryBar from "./DisplayCategoryBar";
import {useEffect, useState} from "react";
import {getURL} from './DisplayAuxJS.js'

export default function Display() {
    // console.clear();
    const [url, setUrl] = useState("");
    const [key, setKey] = useState(0);

    useEffect(()=>{
        setUrl(getURL());
    }, [])

    const updateurl = (newurl) => {
        console.log(newurl);
        setUrl(newurl);
        setKey(key + 1);
    }

    return (
        <>
            <Header />
            <CategoryBar updateurl={updateurl}/>
            <ProductsDisplay fetchUrl={url} key={key}/>
            <PaginationBar updateurl={updateurl}/>
            <Footer />
        </>
    )
}
