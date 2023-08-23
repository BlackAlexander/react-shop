import {clearCategory, getURL, goBackPage, goNextPage, updatePages} from "./DisplayAuxJS";

export default function PaginationBar( {updateurl} ){
    const handlePageChange = () => {
        const newContent = getURL();
        updateurl(newContent);
    };


    return (
        <>
            <div className="pagination-bar">
                <div className="pagination-btn-back" onClick={() => {goBackPage(); handlePageChange();}}>&lt;</div>
                <div className="pagination-current">1</div>
                <div className="pagination-total">/17</div>
                <div className="pagination-btn-next" onClick={() => {goNextPage(); handlePageChange();}}>&gt;</div>
                <select className="pagination-per-page" onChange={() => {updatePages();handlePageChange();}}>
                    <option value="6">6</option>
                    <option value="10">10</option>
                    <option value="25">25</option>
                    <option value="50">50</option>
                </select>
                <div className="pagination-final">per page</div>
            </div>
            <div className="hide-pagination" onClick={() => {clearCategory(); handlePageChange();}}>🏠</div>
        </>
    )
}