import * as api from "../utils/api"
import { useEffect, useState } from "react"
import ItemsCard from "./ItemsCard"
import { useParams } from "react-router-dom"
import Sell from "./Sell"

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
        <Sell />
        <h2>Item</h2>
        
        <ul>
        {items.map(({item_id, item_name, description, img_url, price, category_name}) => {
            return <ItemsCard
            key={item_id}
            item_id={item_id}
            item_name={item_name}
            description={description}
            img_url={img_url}
            price={price}
            category_name={category_name}/>
        })}
        </ul>
        </>
    )
}