import * as api from "../utils/api"
import { useEffect, useState } from "react"

import { useParams } from "react-router-dom"
import SellItem from "./SellItem"

export default function Items () {
    const [items, setItems] = useState([])
   
    const {category} = useParams();

    useEffect(()=> {
        api.getItems(category).then((items) => {
            setItems(items)
        })
    },[category])



    return (
        <>
        <h2>Sell Items</h2>
        <SellItem />
        <h2>Item</h2>
        
        <section className="items">
        <ul>
        {items.map((item) => {
            return (
                <li key={item.item_id}>
                    <img src={item.img_url} alt={item.item_name} className="items-img"/>
                    <h3>{item.item_name}</h3>
                    <p>{item.description}</p>
                    <p>{item.category_name}</p>
                    <p>{item.price}p</p>
                </li>
            )
        })}
        </ul>
        </section>
        </>
    )
}