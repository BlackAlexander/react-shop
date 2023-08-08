import {useEffect, useState} from "react";
import {getURL} from "./DisplayAuxJS";

function Category({title}){
    const newString = String("category-"+title);
    return <option key={newString} value={title}> {title} </option>
}

function Categories(){
    const [items, setItems] = useState([]);
    const list = [];
    useEffect(() => {
        fetch("https://dummyjson.com/products/categories")
            .then(response => response.json())
            .then(data => {
                setItems(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                return [];
            });
    }, []);
    if(items.length === 0){
        return [];
    }
    for (let i = 0; i < items.length; i++){
        list.push(Category({
            key: String(i)+"catt",
            title: items[i]
        }))
    }
    return list;
}

export default function CategoryBar( {updateurl} ){
    const handlePageChange = () => {
        document.querySelector(".pagination-current").innerHTML = String(1);
        const newContent = getURL();
        updateurl(newContent);
    };

    return <div className="category-bar">
        <div className="category-title">Category:</div>
        <select className="category-options">
            <Category key="category--1" title="all" value="all"/>
            <Categories />
        </select>
        <div className="category-search" onClick={() => {handlePageChange();}}>Apply</div>
    </div>
}