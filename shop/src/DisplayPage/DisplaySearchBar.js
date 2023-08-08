import {useEffect, useState} from "react";
import {getURL} from "./DisplayAuxJS";

export default function SearchBar( {updateurl} ){
    const handlePageChange = () => {
        const newContent = getURL();
        updateurl(newContent);
    }

    return <div className="search-bar">
        <label htmlFor ="search-query-bar" className="search-title">Search:</label>
        <input type="text" id="search-query-bar" className="search-input" name="search-query-bar"/>
        <div className="search-search" onClick={() => {handlePageChange();}}>🔍</div>
    </div>
}