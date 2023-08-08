import './Display.css'
import {useEffect, useState} from "react";
import {getURL} from "./DisplayAuxJS";
import Header from "./DisplayHeader";
import CategoryBar from "./DisplayCategoryBar";
import SearchBar from "./DisplaySearchBar";
import ProductsDisplay from "./DisplayProductsDisplay";
import PaginationBar from "./DisplayPaginationBar";
import Footer from "./DisplayFooter";

export default function Display() {
    // console.clear();
    const [url, setUrl] = useState("");
    const [key, setKey] = useState(0);

    useEffect(()=>{
        setUrl(getURL());
    }, [])

    const updateurl = (newurl) => {
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