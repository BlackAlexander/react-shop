import OrderProduct from "./OrderProduct";
import {getToken, getUserID} from "../DisplayPage/DisplayAuxJS";
import {useEffect, useState} from "react";

async function sendReturn(productId, orderID, reason) {
    const IDToUse = getUserID();
    try {
        await fetch(`http://127.0.0.1:42069/return/perform`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Internship-Auth': getToken(),
            },
            body: JSON.stringify({
                "userId": IDToUse,
                "productId": productId,
                "orderId": orderID,
                "reason": reason
            })
        }).then(response => {
            if (response.status === 201) {
                window.alert("Product sent to return.");
            } else {
                window.alert("Could not return.");
            }
            return response.json();
        })
    } catch (error) {
        console.error("Could not return: ", error);
    }
}

export default function OrderPreview({number, date, status, address, payment, products}){
    let orderno = "ORDER no. ";
    orderno += String(number);
    let statusnew = "status: ";
    statusnew += status;
    let priceSum = 0;
    for (let i in products){
        priceSum += (products[i].price * products[i].quantity);
    }
    const totalno = "Total: $" + String(priceSum);

    const [listOfProducts, setListOfProducts] = useState([]);
    const [returnedProducts, setReturnedProducts] = useState([]);
    const [refetch, setRefetch] = useState(0);

    async function returnProduct(productId, orderID) {
        let reason = prompt("Reason for your return:");
        if (reason !== null && reason.length !== 0) {
            await sendReturn(productId, orderID, reason);
            setRefetch(refetch + 1);
        }
    }

    let isDelivered = false;
    if (status === "delivered"){
        isDelivered = true;
    }

    useEffect( () => {
        if (number !== 0) {
            fetch(`http://127.0.0.1:42069/return/order/${number}`, {
                method: 'GET',
                headers: {
                    'Internship-Auth': getToken(),
                },
            })
                .then(response => response.json())
                .then(data => {
                    setReturnedProducts(data);
                    //console.log(data);
                })
        }
    }, [number, refetch]);

    useEffect(() => {
        const updatedProducts = products.map((currentItem, i) => {
            return OrderProduct({
                itemId: currentItem.id,
                itemPic: currentItem.thumbnail,
                itemPrice: currentItem.price,
                itemQuantity: currentItem.quantity,
                itemTitle: currentItem.title,
                orderId: number,
                forkey: i,
                isDelivered: isDelivered,
                listOfReturned: returnedProducts,
                returnProduct: returnProduct
            });
        });

        setListOfProducts(updatedProducts);
    }, [products, number, isDelivered, returnedProducts, refetch]);

    return (
        <>
            <div className="order-preview-container">
                <div className="order-header">
                    <div className="order-preview-number">{orderno}</div>
                    <div className="order-preview-status">{statusnew}</div>
                    <div className="order-preview-date">{date}</div>
                    <div className="order-preview-address">{address}</div>
                </div>
                <div className="order-products">
                    {listOfProducts}
                </div>
                <div className="order-footer">
                    {payment === "CARD" ? (
                            <>
                                <div className="order-preview-payment">Card Payment</div>
                                <div className="order-card-data">
                                    <div className="order-preview-cardemoji">💳</div>
                                    <div className="order-preview-cardnumber">4485 1046 4928 8103</div>
                                    <div className="order-preview-cardexpire">3/2028</div>
                                    <div className="order-preview-cardcvv">461</div>
                                </div>
                            </>
                        ) : (
                        <>
                            <div className="order-preview-payment">Cash Payment</div>
                            <div className="order-card-data">
                                <div className="order-preview-cardemoji">💸</div>
                                <div className="order-preview-cardnumber">Cash payments are not recommended.</div>
                                <div className="order-preview-cardexpire"></div>
                                <div className="order-preview-cardcvv"></div>
                            </div>
                        </>
                    )}

                    <div className="order-preview-total">{totalno}</div>
                </div>
            </div>
        </>
    )
}