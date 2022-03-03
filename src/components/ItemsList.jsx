import * as api from "../utils/api"
import { useEffect, useState } from "react"
import ItemsCard from "./ItemsCard"


export default function Items () {
    const [items, setItems] = useState([])

    useEffect(()=> {
        api.getItems().then((items) => {
            setItems(items)
        })
    },[])


    return (
        <>
        <h2>All items</h2>
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