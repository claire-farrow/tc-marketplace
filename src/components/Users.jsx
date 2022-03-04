import * as api from "../utils/api";
import { useEffect, useState, useContext } from "react";
import Kudos from "./Kudos";
import { UserContext } from "../contexts/UserContexts";


export default function Users () {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const {setLoggedInUser} = useContext(UserContext);

    const fetchUsers = () => {
        api.getUsers()
        .then((users) => {
            setUsers(users);
            setIsLoading(false);
        })
    }

    useEffect(() => {
        fetchUsers();
    }, []);


    const logIn = (user) => {
        setLoggedInUser(user);
    }

    return  isLoading ? (
        <h1>loading...</h1>
     ) : (
        <main>
            <h1>Users Page</h1>
            <section className="users">
            <ul>
                {users.map((user) => {
                    return (
                    <article className="article-users" key={user.username}>
                    <h3>{user.username}</h3>
                    <img src={user.avatar_url} alt={user.username} className="users-img"/>
                    <Kudos kudos={user.kudos} username={user.username} />
                    <button onClick={() => logIn(user)}>Log In</button>
                    </article>
                    )
                })}
            </ul>
            </section>
        </main>
    )
}