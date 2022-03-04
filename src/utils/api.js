import axios from "axios";

const marketApi = axios.create({
    baseURL: "https://nc-marketplace.herokuapp.com/api"
})

export function getItems (category) {
    if (!category) {
        return marketApi.get('/items').then((res) => {
            return res.data.items
        })
    }
    return marketApi.get(`/items?category_name=${category}`).then((res) => {
        return res.data.items
    })
}

export function getCategories () {
    return marketApi.get("/categories").then((res) => {
        return res.data.categories
    })
}

export function getUsers () {
    return marketApi.get("/users").then((res) => {
        return res.data.users
    })
}

export function patchUser (username, kudos)  {
    return marketApi.patch(`/users/${username}`, {kudos})
    .then((res) => {
        return res.data.users
    })
}

export function postItem () {
    return marketApi.post("/items")
    .then((res) => {
        return res.data.users;
    })
}