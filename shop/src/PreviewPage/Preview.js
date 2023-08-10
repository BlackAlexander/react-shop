import './Preview.css'
import CartHeader from "../CartPage/CartHeader.js";

export default function Preview(){
    return (
        <>
            <CartHeader />
            <div id="product-preview">
                <img className="preview-image" alt="Product Preview" src="https://picsum.photos/300/400" />
                    <div className="preview-title">##TITLE##</div>
                    <div className="preview-description">##DESCRIPTION##</div>
                    <div className="preview-price">##PRICE##</div>
                    <div className="preview-add-to-cart" id="previewbtn">🛒 ADD</div>
                    <div className="preview-rating">
                        <span className="star" id="star-1">⭐</span>
                        <span className="star" id="star-2">⭐</span>
                        <span className="star" id="star-3">⭐</span>
                        <span className="star" id="star-4">⭐</span>
                        <span className="star" id="star-5">⭐</span>
                    </div>
                    <div className="preview-left-pic">
                    </div>
                    <div className="preview-right-pic">></div>
            </div>
        </>
    )
}