
interface iState {
    users: any[],
    datasources: any[]
}

const initState: iState = {
    users: [],
    datasources: []
}

export default function reducer(state = initState, action: any) {

    if (action.type == "ADD_USER") {
        return {
            ...state,
            users: [...state.users, action.user]
        }
    }

    if (action.type == "ADD_DATASOURCE") {
        return {
            ...state,
            datasources: [...state.datasources, action.datasource], 
        }
    }

    return state

}