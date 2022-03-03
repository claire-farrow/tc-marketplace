import { useEffect, useState } from "react";
import * as api from "../utils/api"

export default function Sell () {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        api.getCategories().then((categories) => {
            setCategories(categories)
        })
    }, []);

    const initialFormData = {
        item_name: "",
        img_url: "",
        price: 0,
        description: "",
        category_name: ""
    }

    const [formData, setFormData] = useState(initialFormData)

    const handleChange = (e) => {
        setFormData({
            ...formData, 
            [e.target.id]: e.target.value
        })
    }
    console.log(formData)
    const handleSell = (e) => {
        console.log(e.target.value)
    }


    return (
        <>
      <form>
        <label>Item Name</label>
        <input type="text" id="item_name" onChange={handleChange}></input>
        <label>Img URL</label>
        <input type="text" id="img_url" value="https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Claw-hammer.jpg/290px-Claw-hammer.jpg"></input>
        <label>Price</label>
        <input type="number" id="price" value="100"></input>
        <label>Description</label>
        <input type="text" id="description" value="a hammer"></input>
        <label for="category">Choose a category:</label>

        <select name="categories" id="categories">
          {categories.map(({ category_name }) => {
            return <option value={category_name}>{category_name}</option>;
          })}
        </select>
        <button onClick={(e) => {
            e.preventDefault()
            handleSell(e)
        }}>Add item</button>
      </form>
      </>
    );
}