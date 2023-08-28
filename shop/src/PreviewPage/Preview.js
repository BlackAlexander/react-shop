import './Preview.css'
import CartHeader from "../CartPage/CartHeader.js";
import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import {useGetProductQuery} from "../redux/apis";

function setStars(starrating){
    for (let i = 1; i <= 5; i++){
        const intrating = parseInt(starrating)+1;
        const thestar = document.querySelector("#star-" + String(i));
        if (thestar === null){
            return;
        }
        if (intrating > i){
            thestar.style.color = "rgba(0, 0, 0, 1)";
        }
        if (intrating < i){
            thestar.style.color = "rgba(0, 0, 0, 0.01)";
        }
        if (Number(intrating) === Number(i)){
            thestar.style.color = "rgba(0, 0, 0, " + String(starrating - Math.floor(starrating)) + ")";
        }
    }
}

function RatingPreview({rpId, rpTitle, rpDescription, rpRating}){
    let newId = "review-" + String(rpId);
    return <div id={newId} key={newId} className="rp-container">
        <div className="rp-title">{rpTitle}</div>
        <div className="rp-description">{rpDescription}</div>
        <div className="rp-rating">{rpRating}⭐</div>
    </div>
}

async function getRatings(theId) {
    let fetchUrl = "http://127.0.0.1:42069/review/";
    fetchUrl += theId;

    try {
        const response = await fetch(fetchUrl, {
            method: 'GET',
        });
        return await response.json();
    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
}

export default function Preview(){
    /** @namespace product.images **/
    /** @namespace product.rating **/
    let location = useLocation();
    const [starrating, setStarrating] = useState(0);

    const [ratingsToUse, setRatingsToUse] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const id = location.pathname.slice(6);
            const listOfRatings = await getRatings(id);
            setRatingsToUse(listOfRatings);
            console.log(listOfRatings);
        }
        fetchData().then();
    }, []); // Fetch data once when the component mounts

    let ratings = [];
    let average = 0;
    for (let i = 0; i < ratingsToUse.length; i++){
        let therating = ratingsToUse[i];
        average += Number(therating.rating);
        ratings.push(RatingPreview({
            rpId: String(i),
            rpDescription: therating.comment,
            rpRating: therating.rating,
            rpTitle: therating.title
        }))
    }
    if (ratingsToUse.length > 0){
        average = Math.round((average/(ratingsToUse.length)) * 100) / 100;
    } else {
        average = "No."
    }

    const [currentItem, setCurrentItem] = useState(undefined);
    const [currentImage, setCurrentImage] = useState("https://picsum.photos/200/300");
    const id = location.pathname.slice(6);
    const { data: product } = useGetProductQuery(id);

    useEffect(() => {
        if (product) {
            setCurrentItem(product);
            setCurrentImage(product.images[0]);
            setStarrating(product.rating);
        }
    }, [product, starrating]);

    if(currentItem === undefined){
        return (<></>);
    }

    const images = currentItem.images;
    setStars(starrating);

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
                    <div className="preview-user-rating" >🌠{average}</div>
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