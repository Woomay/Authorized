import store from '../store'
import * as http from './http'

export const getLoggedUser = () => {
    setTimeout(() => {
        store.dispatch({
            type: 'GET_LOGGED_USER'
        })
    },500)
}

// export const login = () => {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             store.dispatch({
//                 type: 'SET_LOGGED_USER',
//                 logged: true
//             })
//             resolve()
//         },500)
//     })
// }
export function login(body) {
    return http.post(`/login`,body)
        .then(() => {
            store.dispatch({
                type: 'SET_LOGGED_USER',
                logged: true
            })
        })
}

export const logout = () => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            store.dispatch({
                type: 'SET_LOGGED_USER',
                logged: false
            })
            resolve()
        },500)
    })
}