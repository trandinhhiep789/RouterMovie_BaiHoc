import React, { useState } from 'react'
import { NavLink, Route, Router } from 'react-router-dom'
import 'antd/dist/antd.css'

import { Layout, Menu, Breadcrumb } from 'antd';
import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export const AdminTemplate = (props) => {

    const [state, setState] = useState({
        collapsed: false,
    })

    const onCollapse = collapsed => {
        console.log(collapsed);
        setState({ collapsed });
    };

    const { Component, ...restParams } = props
    return <Route {...restParams} render={(propsRoute) => {
        const { collapsed } = state;
        return <>
            <Layout style={{ minHeight: '100vh' }}>

                <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
                    <div className="logo" />
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">

                        <div className="p-5">
                            <img src="https://picsum.photos/50/50" style={{ borderRadius: '50%' }} />
                            {!collapsed ? <div className="mt-3 ml-1">
                                <span>ELTR</span>
                            </div> : ''}
                        </div>

                        <SubMenu key="sub1" icon={<UserOutlined />} title="User">
                            <Menu.Item key="3">
                                <NavLink to='/admin/quanlyphim'>Quan ly phim</NavLink>
                            </Menu.Item>
                            <Menu.Item key="4">Them moi phim</Menu.Item>

                        </SubMenu>

                        <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
                            <Menu.Item key="6">
                                <NavLink to='/admin/quanlynguoidung'>Quan ly nguoi dung</NavLink>
                            </Menu.Item>
                            <Menu.Item key="8">
                                Them moi nguoi dung
                            </Menu.Item>
                        </SubMenu>

                        <Menu.Item key="9" icon={<FileOutlined />}>
                            Files
                        </Menu.Item>
                    </Menu>
                </Sider>

                <Layout className="site-layout">
                    <Header className="site-layout-background" style={{ padding: 0 }} />
                    <Content style={{ margin: '0 16px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>User</Breadcrumb.Item>
                            <Breadcrumb.Item>Bill</Breadcrumb.Item>
                        </Breadcrumb>
                        <Component {...propsRoute} className="site-layout-background" style={{ padding: 24, minHeight: 360 }} />

                    </Content>
                    <Footer style={{ textAlign: 'center' }}>ELTR Design ©2018 Created by ELTR SC</Footer>
                </Layout>

            </Layout>
        </>
    }} />
}