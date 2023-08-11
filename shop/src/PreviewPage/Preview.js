import './Preview.css'
import CartHeader from "../CartPage/CartHeader.js";
import {useEffect, useState} from "react";
import {useGetProductQuery} from "../redux/apis.js";
import {getToken} from "../DisplayPage/DisplayAuxJS.js";
import {useLocation} from "react-router-dom";

export default function Preview(){
    /** @namespace currentItem.rating **/
    let location = useLocation();
    const id = location.pathname.slice(6);

    const [currentItem, setCurrentItem] = useState(undefined);

    const token = getToken();
    const { data: product } = useGetProductQuery([id, token]);

    useEffect(() => {
        if (product) {
            setCurrentItem(product);
        }
    }, [product]);
    
    const images = currentItem.images;
    const rating = currentItem.rating;

    return (
        <>
            <CartHeader />
            <div id="product-preview">
                <img className="preview-image" alt="Product Preview" src="https://picsum.photos/300/400" />
                    <div className="preview-title">{currentItem.title}</div>
                    <div className="preview-description">{currentItem.description}</div>
                    <div className="preview-price">{currentItem.price}</div>
                    <div className="preview-add-to-cart" id="previewbtn">🛒 ADD</div>
                    <div className="preview-rating">
                        <span className="star" id="star-1">⭐</span>
                        <span className="star" id="star-2">⭐</span>
                        <span className="star" id="star-3">⭐</span>
                        <span className="star" id="star-4">⭐</span>
                        <span className="star" id="star-5">⭐</span>
                    </div>
                    <div className="preview-left-pic">&lt;</div>
                    <div className="preview-right-pic">&gt;</div>
            </div>
        </>
    )
}