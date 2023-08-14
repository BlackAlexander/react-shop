import {returnInitialItems} from './DisplayAuxJS';
import {useDispatch, useSelector} from "react-redux";
import {selectFavs, setFavs} from "../redux/slices/favorites";
import {useNavigate} from "react-router-dom";

export default function ProductsDisplay({fetchUrl, showreview}){
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const listOfFavs = useSelector(selectFavs);
    const updateFavs = (newList) => {
        dispatch(setFavs(newList));
    }
    const itemsList = returnInitialItems(fetchUrl, listOfFavs, updateFavs, navigate, showreview);
    return(
        <>
            <div className="products-display" id="list-of-products">
                {itemsList}
                {itemsList.length===0 && <div className="no-items-to-show">Hmm...</div>}
            </div>
        </>
    )
}
