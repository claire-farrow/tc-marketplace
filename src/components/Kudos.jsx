import {useState} from 'react';
import { patchUser } from '../utils/api';

export default function Kudos ({kudos, username}) {
    const [kudosCrement, setKudosCrement] = useState(0);

    const handleClick = (voteIncrement) => {
        setKudosCrement((currentKudos) => currentKudos + voteIncrement);
        patchUser(username, kudosCrement).catch(() => {
            setKudosCrement((currentKudos) => currentKudos - voteIncrement)
        })
    }

    return (
        <section>
            <h4>Kudos: {kudos + kudosCrement}</h4>
            <button disabled={kudosCrement === 1} onClick={() => handleClick(1)}>+</button>
            <button disabled={kudosCrement === -1} onClick={() => handleClick(-1)}>-</button>
        </section>
    )
}