import axios from "axios";

const marketApi = axios.create({
    baseURL: "https://nc-marketplace.herokuapp.com/api"
})

export function getItems () {
    return marketApi.get("/items").then((res) => {
        return res.data.items
    })
}