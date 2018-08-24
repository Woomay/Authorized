import React from 'react'
import { connect } from 'react-redux'
import { logout } from '../utils/xhr'
import {message} from 'antd'


const AppHomePage = ({history,dispatch}) => {
    const handleClick = (dispatch) => {
        message.warning('即将前往登录页面',1.5)
        setTimeout(() => {
            dispatch(logout())
        },1500)
    }
    return(<div>
        App Home Page
        <br/><br/>
        <button onClick={() => handleClick(dispatch)}>
            Logout
        </button>
    </div>)
}

export default connect()(AppHomePage)