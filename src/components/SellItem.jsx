import { useEffect, useState } from "react";
import * as api from "../utils/api"


export default function SellItem () {
    const [sellItem, setSellItem] = useState([])

    useEffect(() => {
        api.postItem().then((sellItem) => {
            setSellItem(sellItem)
        })
    }, [])

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        api.getCategories().then((categories) => {
            setCategories(categories)
        })
    }, []);
    

    return (
        <>
        <form>
            <label>Item Name</label>
            <input type="text" id="item_name"></input>
            <label>Item Image URL</label>
            <input type="text" id="img_url"></input>
            <label>Price</label>
            <input type="number" id="price"></input>
            <label>Description</label>
            <input type="text" id="description"></input>
            <label for="category">Category</label>
            
            <select name="categories" id="categories">
            {categories.map(({category_name}) => {
                return (
                <option value={categories.category_name}>{categories.categeory_name}
                </option>)
            })}
            </select>
           
            <button onClick={sellItem}>Sell Item</button>
        </form>
        </>
    )
}


