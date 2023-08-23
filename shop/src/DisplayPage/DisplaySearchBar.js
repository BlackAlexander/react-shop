import {getURL} from "./DisplayAuxJS";

export default function SearchBar( {updateurl, count} ){
    const handlePageChange = () => {
        const newContent = getURL(count);
        updateurl(newContent);
    }

    const fixSearch = () =>{
        document.querySelector(".category-options").value="all";
        document.searchON = true;
    }

    return <div className="search-bar">
        <label htmlFor ="search-query-bar" className="search-title">Search:</label>
        <input type="text" id="search-query-bar" className="search-input" name="search-query-bar"/>
        <div className="search-search" onClick={() => {fixSearch(); handlePageChange()}}>🔍</div>
    </div>
}