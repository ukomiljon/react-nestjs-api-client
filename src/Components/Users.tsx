import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function Users() {

    const users = useSelector((state: any) => state.users)
    const dispatch = useDispatch()

    return (
        <div>
            <p>{users.length}</p>
            <button onClick={() => { dispatch({ type: 'ADD_USER', user: { name: 'Komil' } }) }} >Add User</button>
            <p>{users.map((user: any) => (<div>{user.name}</div>))}</p>
        </div>
    )
}
