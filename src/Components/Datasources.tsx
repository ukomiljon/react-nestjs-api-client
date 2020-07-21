import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function Datasources() {
    const datasources = useSelector((state: any) => state.datasources)
    const dispatch = useDispatch()

    return (
        <div>
            <p>{datasources.length}</p>
            <button onClick={() => { dispatch({ type: 'ADD_DATASOURCE', datasource: { name: 'mysql' } }) }}>Add Datasource</button>
            <p> {datasources.map((datasource: any) => (<div>{datasource.name}</div>))}</p>
        </div>
    )
}
