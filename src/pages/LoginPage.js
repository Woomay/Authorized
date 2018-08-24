import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import { login } from '../utils/xhr'

import { Form,Icon,Input,Button,Checkbox } from 'antd'
const FormItem = Form.Item;

class Login extends React.Component {
    handleSubmit = (e) => {
        const {dispatch} = this.props
        console.log("props",this.props)
        e.preventDefault();
        this.props.form.validateFields((err,values) => {
            if (!err) {
                const formData = {
                    user: values.username,
                    pwd: values.password
                }
                dispatch(login(formData)).then(() => {
                    this.context.router.history.push('/app')
                })
            }
        })   
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="login-wrapper">
                <Form onSubmit={this.handleSubmit} className="login-form">
                <FormItem style={{textAlign: 'center'}}><h2>Login</h2></FormItem>
                <FormItem>  
                    {getFieldDecorator('username', {
                        rules:[{required: true,message: 'please input your Username!'},],
                    })(
                        <Input prefix={<Icon type="user" style={{ color:'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('password',{
                        rules:[{required: true,message: 'Please input your Password!'}],
                    })(
                    <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25' }} />} type="password" placeholder="Password" /> 
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true,
                    })(
                        <Checkbox>Remember me</Checkbox>
                    )}
                    <a className="login-form-forgot" href="">Forgot password</a>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Login
                    </Button>
                    Or <Link to="/auth/register">register now!</Link>
                </FormItem>
            </Form>
            </div>
            
        );
    }
}
Login.contextTypes = {
    router: PropTypes.object.isRequired
}
const LoginPage = Form.create()(Login)
export default connect()(LoginPage)