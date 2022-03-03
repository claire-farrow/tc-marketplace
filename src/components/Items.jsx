import * as api from "../utils/api"
import { useEffect, useState } from "react"


export default function Items () {
    const [items, setItems] = useState([])

    useEffect(()=> {
        api.getItems().then((items) => {
            setItems(items)
        })
    },[])

    console.log(items)

    return (
        <>
        <h2>All items</h2>
        <ul>
            {items.map(({item_id, item_name, description, img_url, price, category_name}) => {
                return (
                    <li key={item_id}>
                        <img src={img_url} alt={item_name}/>
                        <h3>{item_name}</h3>
                        <p>{description}</p>
                        <p>{category_name}</p>
                        <p>{price}p</p>
                    </li>
                )
            })}
        </ul>
        </>
    )
}