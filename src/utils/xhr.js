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
    return (dispatch,getState) => {
        return http.post(`/login`,body).then(res => {
                dispatch({
                    type: 'SET_LOGGED_USER',
                    logged: true
                })
                // store.dispatch(this.context.router.history.push('/app'))
            })
            .catch((err) => {
                console.log('出问题了',err)
            });
    }
}

export const logout = () => {
    return (dispatch) => {
       store.dispatch({
           type:'SET_LOGGED_USER',
           logged: false
       })
    }
}

export function register(body) {
    return(dispatch,getState) => {
        return http.post('/register',body)
            .then(() => {
                store.dispatch({
                    type: 'SET_LOGGED_USER',
                    logged: true
                })
            })
    }
}