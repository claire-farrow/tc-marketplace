
import {useContext} from 'react';
import {Link} from 'react-router-dom';
import { UserContext } from '../contexts/UserContexts';

export default function Nav () {
    const {loggedInUser} = useContext(UserContext)
    return (
        <nav className="nav">
            <Link to="/" className="nav-home">
                Home
            </Link>
            <Link to='/users' className="nav-users">
                Users
            </Link>
            <span>
                {loggedInUser.username}
                <img className="nav-avatar_url" src={loggedInUser.avatar_url} alt={loggedInUser.username}/>
            </span>
        </nav>
    )
}