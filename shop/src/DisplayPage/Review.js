import {useEffect} from "react";

function generateHover(howMany){
    for (let i = 0; i < 36; i++){
        const idToGet = "circlePiece" + String(i);
        const thisPiece = document.getElementById(idToGet);
        if(i <= howMany){
            thisPiece.style.backgroundColor = "rgba(255, 255, 255, 0.9)";
        } else {
            thisPiece.style.backgroundColor = "rgba(255, 255, 255, 0.4)";
        }
    }
}

function generate36(){
    const container = document.querySelector(".review-box-rating-input");
    if (container === null){
        return;
    }
    container.innerHTML = "";
    const ratingPiece = document.createElement("div");
    ratingPiece.innerHTML = "1⭐";
    ratingPiece.classList.add("review-rating-piece")
    container.append(ratingPiece);
    container.setAttribute("lastPressed", "1");
    for (let i = 0; i < 36; i++){
        const newPiece = document.createElement("div");
        newPiece.classList.add("review-circle-piece");
        newPiece.innerHTML = "";
        newPiece.id = "circlePiece" + String(i);
        newPiece.style.transform = "rotate(" + String(i*10)+"deg)" + " translateY(-500%) ";
        newPiece.addEventListener("mouseover", function () {
            generateHover(i);
        })
        newPiece.addEventListener("click", function () {
            let selectedScore;
            if (i === 0){
                selectedScore = 1;
            } else if (i === 9){
                selectedScore = 2;
            } else if (i === 18){
                selectedScore = 3;
            } else if (i === 27){
                selectedScore = 4;
            } else if (i === 35){
                selectedScore = 5;
            } else {
                selectedScore = Math.round((i/8.75+1) * 100) / 100
            }
            ratingPiece.innerHTML = String(selectedScore) + "⭐";
            container.setAttribute("lastPressed", String(i));
        })
        newPiece.addEventListener("mouseout", function(){
            let toGo = parseInt(container.getAttribute("lastPressed"));
            generateHover(toGo);
        })
        container.append(newPiece);
    }
}

export default function Review({idToReview, showreview, titleToReview}){
    useEffect(()=>{
        generate36();
    })

    function sendData(){
        console.log(idToReview);
        const reviewTitle = document.querySelector(".review-box-title-input").value;
        const reviewDescription = document.querySelector(".review-box-description-input").value;
        const reviewRating = document.querySelector(".review-rating-piece").innerHTML.slice(0, -1);
        console.log(reviewTitle);
        console.log(reviewDescription);
        console.log(reviewRating);
    }

    return <div className="review-page">
        <div className="review-background" onClick={()=>(showreview("-1"))}>
        </div>
        <div className="review-container">
            <div className="review-container-title">add review for {titleToReview}</div>
            <div className="review-box-title">
                <div className="review-box-title-title">title</div>
                <textarea name="review-title" spellCheck="false" placeholder="..." className="review-box-title-input" />
            </div>
            <div className="review-box-description">
                <div className="review-box-description-title">description</div>
                <textarea name="review-description" spellCheck="false" placeholder="..." className="review-box-description-input" />
            </div>
            <div className="review-box-rating">
                <div className="review-box-rating-title">rating</div>
                <div className="review-box-rating-input"></div>
            </div>
            <div className="review-publish" onClick={()=>{sendData();}}>PUSH</div>
        </div>
    </div>
}