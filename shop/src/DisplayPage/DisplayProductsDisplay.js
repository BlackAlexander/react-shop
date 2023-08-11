import {returnInitialItems} from './DisplayAuxJS';
import {useDispatch, useSelector} from "react-redux";
import {selectFavs, setFavs} from "../redux/slices/favorites";

export default function ProductsDisplay({fetchUrl}){
    if (String(fetchUrl.slice(0,4)) !== "http"){
        return (<> </>)
    }
    const dispatch = useDispatch();
    const listOfFavs = useSelector(selectFavs);
    const updateFavs = (newList) => {
        dispatch(setFavs(newList));
    }
    const itemsList = returnInitialItems(fetchUrl, listOfFavs, updateFavs);
    return(
        <>
            <div className="products-display" id="list-of-products">
                {itemsList}
                {itemsList.length===0 && <div className="no-items-to-show">Hmmm.</div>}
            </div>
        </>
    )
}
