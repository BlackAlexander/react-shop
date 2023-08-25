import CartHeader from "../CartPage/CartHeader";
import CartFooter from "../CartPage/CartFooter";
import OrderPreview from "../OrdersPage/OrderPreview";
import OrderDisplay from "../OrdersPage/OrderDisplay";
import './Orders.css'
import {useEffect, useState} from "react";
import {getToken, getUserID} from "../DisplayPage/DisplayAuxJS";
import OrderMini from "./OrderMini";

function processMiniOrders(rawList, changeOrderTo){
    /** @namespace currentItem.orderNumber **/
    let list = [];
    if (rawList === undefined){
        return [];
    }
    for (let i = 0; i < rawList.length; i++){
        const currentItem = rawList[i];
        let orderPrice = 0;
        for (let i = 0; i < currentItem.products.length; i++){
            orderPrice += Number(currentItem.products[i].price);
        }
        console.log(orderPrice);
        list.push(OrderMini({
            index: String(i + 1),
            number: currentItem.orderNumber,
            status: "to be delivered",
            quantity: currentItem.products.length,
            date: currentItem.date,
            total: "$"+String(orderPrice),
            changeOrderTo: changeOrderTo
        }))
    }
    return list;
}

export default function Orders() {
    const [currentOrder, setCurrentOrder] = useState(null),
        [currentDate, setCurrentDate] = useState(null),
        [currentStatus, setCurrentStatus] = useState("unknown"),
        [currentAddress, setCurrentAddress] = useState(null),
        [currentPayment, setCurrentPayment] = useState(null),
        [currentTotal, setCurrentTotal] = useState("$0"),
        [currentProducts, setCurrentProducts] = useState([]),
        [listOfOrders, setListOfOrders] = useState([]);

    function changeOrderTo(newOrder){
        setCurrentOrder(newOrder);
    }

    useEffect( () => {
        let fetchUrl = "http://127.0.0.1:42069/order/";
        const IDToUse = getUserID();
        fetchUrl += IDToUse;
        fetch(fetchUrl, {
            method: 'GET',
            headers: {
                'Internship-Auth': getToken(),
            },
        })
            .then(response => response.json())
            .then(data => {
                setListOfOrders(processMiniOrders(data, changeOrderTo));
            })
    }, [])

    return (
        <>
            <CartHeader />
            <OrderDisplay miniOrdersList={listOfOrders} />
            <OrderPreview />
            <CartFooter />
        </>
    )
}