import './Preview.css'
import CartHeader from "../CartPage/CartHeader.js";
import {useEffect, useState} from "react";
import {useGetProductQuery} from "../redux/apis.js";
import {getToken} from "../DisplayPage/DisplayAuxJS.js";
import {useLocation} from "react-router-dom";

export default function Preview(){
    /** @namespace currentItem.rating **/
    /** @namespace product.images **/
    let location = useLocation();
    const id = location.pathname.slice(6);

    const [currentItem, setCurrentItem] = useState(undefined);
    const [currentImage, setCurrentImage] = useState("https://picsum.photos/200/300");

    const token = getToken();
    const { data: product } = useGetProductQuery([id, token]);

    useEffect(() => {
        if (product) {
            setCurrentItem(product);
            setCurrentImage(product.images[0]);
        }
    }, [product]);

    if(currentItem === undefined){
        return (<></>);
    }

    const images = currentItem.images;
    const rating = currentItem.rating;

    function leftPic(){
        for (let i = 1; i < images.length; i++){
            console.log(images[i]);
            if(currentImage == images[i]){
                setCurrentImage(images[i-1]);
                return;
            }
        }
        if (currentImage == images[0]){
            setCurrentImage(images[images.length - 1]);
        }
    }

    function rightPic(){
        for (let i = 0; i < images.length - 1; i++){
            console.log(images[i]);
            if(currentImage == images[i]){
                setCurrentImage(images[i+1]);
                return;
            }
        }
        if (currentImage == images[images.length - 1]){
            setCurrentImage(images[0]);
        }
    }

    return (
        <>
            <CartHeader />
            <div id="product-preview">
                <img className="preview-image" src={currentImage} alt="Product Preview" />
                    <div className="preview-title">{currentItem.title}</div>
                    <div className="preview-description">{currentItem.description}</div>
                    <div className="preview-price">${currentItem.price}</div>
                    <div className="preview-add-to-cart" id="previewbtn">🛒 ADD</div>
                    <div className="preview-rating">
                        <span className="star" id="star-1">⭐</span>
                        <span className="star" id="star-2">⭐</span>
                        <span className="star" id="star-3">⭐</span>
                        <span className="star" id="star-4">⭐</span>
                        <span className="star" id="star-5">⭐</span>
                    </div>
                    <div className="preview-left-pic" onClick={()=>{leftPic()}}>&lt;</div>
                    <div className="preview-right-pic" onClick={()=>{rightPic()}}>&gt;</div>
            </div>
        </>
    )
}