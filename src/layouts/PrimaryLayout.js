import React from 'react'
import {Switch,Route,Redirect,NavLink} from 'react-router-dom'
import PrimaryHeader from '../components/PrimaryHeader'
import AppHomePage from '../pages/AppHomePage'
import OrderPage from '../pages/OrderPage'
import UserSubLayout from './UserSubLayout'
import ProductSubLayout from './ProductSubLayout'

import {Layout,Menu,Icon,Button,Tooltip} from 'antd'

const {Header,Sider,Content,Footer} = Layout

class PrimaryLayout extends React.Component {
    state = {
        collapsed: false
    };
    handleToggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }
    render() {
        const {match} = this.props
        const menus = [
            {title: 'Home',path: '/app',iconType: 'user'},
            {title: 'User',path: '/app/users',iconType: 'video-camera'},
            {title: 'Products',path: '/app/products',iconType: 'upload'},
            {title: 'Order',path: '/app/order',iconType: 'upload'},
        ]
        return (
            <Layout style={{ minHeight: '100vh' }}>
                <Sider
                    breakpoint='lg'
                    trigger={null}
                    collapsible
                    collapsed={this.state.collapsed}
                >  
                    <div className="logo">Authorized App</div>
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['Home']}>
                        {menus.map((item,index) => {
                            return <Menu.Item key={item.title}>
                                <Icon type={item.iconType} />
                                <NavLink style={{display: 'inline-block',color: '#fff'}} to={item.path} exact activeClassName="active">{item.title}</NavLink>
                            </Menu.Item>
                        })}
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{ background: '#fff', padding: '0px 16px',display: 'flex',justifyContent: 'space-between',alignItems: 'center'}}>
                        <Icon 
                            className="trigger"
                            type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                            onClick={this.handleToggle}
                            style={{fontSize: 24}}
                        />
                        {/* <PrimaryHeader /> */}
                        {/* <Icon type="team" style={{fontSize: 24}} /> */}
                        <Tooltip title="logout">
                            <Button type="default" shape="circle" icon="logout" />
                        </Tooltip>
                    </Header>
                    <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
                        <main>
                            <Switch>
                                <Route path={`${match.path}`} exact component={AppHomePage} />
                                <Route path={`${match.path}/users`} component={UserSubLayout} />
                                <Route path={`${match.path}/products`} component={ProductSubLayout} />
                                <Route path={`${match.path}/order`} component={OrderPage} />
                                <Redirect to={`${match.url}`} />
                            </Switch>
                        </main>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                        basic react demo by hyx
                    </Footer>
                </Layout>
            </Layout>

        );
    }
}


export default PrimaryLayout