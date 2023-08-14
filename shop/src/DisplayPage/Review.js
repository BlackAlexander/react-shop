export default function Review({idToReview, showreview, titleToReview}){
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
                <textarea name="review-rating" spellCheck="false" placeholder="..." className="review-box-rating-input" />
            </div>
        </div>
    </div>
}