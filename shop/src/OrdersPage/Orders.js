import React, { useEffect, useState } from "react";
import CartHeader from "../CartPage/CartHeader";
import CartFooter from "../CartPage/CartFooter";
import OrderPreview from "../OrdersPage/OrderPreview";
import OrderDisplay from "../OrdersPage/OrderDisplay";
import './Orders.css';
import { getToken, getUserID } from "../DisplayPage/DisplayAuxJS";
import OrderMini from "./OrderMini";

function processMiniOrders(rawList, changeOrderTo) {
    /** @namespace currentItem.orderNumber **/
    let list = [];
    if (rawList === undefined) {
        return [];
    }
    for (let i = 0; i < rawList.length; i++) {
        const currentItem = rawList[i];
        let orderPrice = 0;
        for (let j = 0; j < currentItem.products.length; j++) {
            orderPrice += Number(currentItem.products[j].price) * Number(currentItem.products[j].quantity);
        }
        list.push(OrderMini({
            index: String(rawList.length - i),
            number: currentItem.orderNumber,
            status: "delivered",
            quantity: currentItem.products.length,
            date: currentItem.date,
            total: "$" + String(orderPrice),
            changeOrderTo: changeOrderTo
        }));
    }
    return list;
}

export default function Orders() {
    const [currentOrder, setCurrentOrder] = useState(0);
    const [currentDate, setCurrentDate] = useState(null);
    const [currentStatus, setCurrentStatus] = useState("unknown");
    const [currentAddress, setCurrentAddress] = useState(null);
    const [currentPayment, setCurrentPayment] = useState(null);
    const [currentProducts, setCurrentProducts] = useState([]);
    const [listOfOrders, setListOfOrders] = useState([]);
    const [rawList, setRawList] = useState([]);

    function changeOrderTo(newOrder) {
        setCurrentOrder(newOrder);
    }

    useEffect(() => {
        const fetchUrl = "http://127.0.0.1:42069/order/";
        const IDToUse = getUserID();
        const headers = {
            'Internship-Auth': getToken(),
        };

        fetch(fetchUrl + IDToUse, { method: 'GET', headers })
            .then(response => response.json())
            .then(data => {
                setRawList(data);
                setListOfOrders(processMiniOrders(data, changeOrderTo));
                setCurrentOrder(data[0].orderNumber);
            });
    }, []);

    useEffect(() => {
        for (let i in rawList) {
            if (String(rawList[i].orderNumber) === String(currentOrder)) {
                setCurrentDate(rawList[i].date);
                setCurrentStatus("delivered");
                setCurrentAddress(rawList[i].address);
                setCurrentPayment(rawList[i].payment);
                setCurrentProducts(rawList[i].products);
            }
        }
    }, [rawList, currentOrder]);

    return (
        <>
            <CartHeader />
            <OrderDisplay miniOrdersList={listOfOrders} />
            <OrderPreview
                number={currentOrder}
                date={currentDate}
                status={currentStatus}
                address={currentAddress}
                payment={currentPayment}
                products={currentProducts}
            />
            <CartFooter />
        </>
    );
}
