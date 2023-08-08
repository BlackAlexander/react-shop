import './DisplayPage/Display.css'
import Header from './DisplayPage/DisplayHeader.js'
import Footer from './DisplayPage/DisplayFooter.js'
import PaginationBar from "./DisplayPage/DisplayPaginationBar.js";
import ProductsDisplay from "./DisplayPage/DisplayProductsDisplay.js";
import CategoryBar from "./DisplayPage/DisplayCategoryBar";
import SearchBar from "./DisplayPage/DisplaySearchBar.js"
import {useEffect, useState} from "react";
import {getURL} from './DisplayPage/DisplayAuxJS.js'

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
            <SearchBar updateurl={updateurl}/>
            <ProductsDisplay fetchUrl={url} key={key}/>
            <PaginationBar updateurl={updateurl}/>
            <Footer />
        </>
    )
}
