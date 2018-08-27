const defaultState = {
    pending: true, 
    logged: false
}

const storage = window.localStorage;
const initialState = JSON.parse(storage.getItem('LOGGED_USER_INFO')) || { ...defaultState }

const loggedUserReducer = (state = initialState,action) => {
    if (action.type === 'GET_LOGGED_USER') {
        return Object.assign({},state,{
            pending: false
        })
    }

    if (action.type === 'SET_LOGGED_USER') {
        return Object.assign({},state,{
            pending: false,
            logged: action.logged
        })
    }

    return state
}

export default loggedUserReducer