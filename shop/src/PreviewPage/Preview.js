import './Preview.css'
import CartHeader from "../CartPage/CartHeader.js";
import {useEffect, useState} from "react";
import {useGetProductQuery} from "../redux/apis.js";
import {getToken} from "../DisplayPage/DisplayAuxJS.js";
import {useLocation} from "react-router-dom";
import {useSelector} from "react-redux";
import {selectRatings} from "../redux/slices/ratings";


function RatingPreview({rpId, rpTitle, rpDescription, rpRating}){
    let newId = "review-" + String(rpId);
    return <div id={newId} key={newId} className="rp-container">
        <div className="rp-title">{rpTitle}</div>
        <div className="rp-description">{rpDescription}</div>
        <div className="rp-rating">{rpRating}⭐</div>
    </div>
}

export default function Preview(){
    /** @namespace product.images **/
    let location = useLocation();
    const id = location.pathname.slice(6);

    const listOfRatings = useSelector(selectRatings);
    let theseRatings = [];
    for (let i = 0; i < listOfRatings.length; i++){
        const thisId = listOfRatings[i].id;
        if (thisId === id){
            theseRatings.push(listOfRatings[i]);
        }
    }
    let ratings = [];
    for (let i = 0; i < theseRatings.length; i++){
        let therating = theseRatings[i];
        ratings.push(RatingPreview({
            rpId: String(i),
            rpDescription: therating.description,
            rpRating: therating.rating,
            rpTitle: therating.title
        }))
    }

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
    const starrating = currentItem.rating;

    function leftPic(){
        for (let i = 1; i < images.length; i++){
            if(currentImage === images[i]){
                setCurrentImage(images[i-1]);
                return;
            }
        }
        if (currentImage === images[0]){
            setCurrentImage(images[images.length - 1]);
        }
    }

    function rightPic(){
        for (let i = 0; i < images.length - 1; i++){
            if(currentImage === images[i]){
                setCurrentImage(images[i+1]);
                return;
            }
        }
        if (currentImage === images[images.length - 1]){
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
                    <div className="preview-ratings-holder">{ratings}</div>
                    <div className="preview-price">${currentItem.price}</div>
                    {/*<div className="preview-add-to-cart" id="previewbtn">🛒 ADD</div>*/}
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