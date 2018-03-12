import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Layout, Menu } from 'antd'

const { Header } = Layout
const { Item } = Menu

const menu = (
    <Menu mode="horizontal">
        <Item key="1">
            <NavLink to="/">Home</NavLink>
        </Item>
        <Item key="2">
            <NavLink to="/page-one">Page one</NavLink>
        </Item>
        <Item key="3">
            <NavLink to="/page-two">Page Two</NavLink>
        </Item>
    </Menu>
)

export default class MenuTop extends Component {
    render() {
        return <Header>{menu}</Header>
    }
}
