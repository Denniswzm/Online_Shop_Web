import React from "react";
import './Navbar.scss'
import logo from "../img/Logo.png";
import { Row, Col, Menu, Cascader, Input, Button, Dropdown } from "antd";
import { MailOutlined, AppstoreOutlined, SettingOutlined, SearchOutlined, AudioOutlined, DownOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";

const { SubMenu } = Menu;

const { Search } = Input;

function handleMenuClick(e) {
    console.log('click', e);
}

const provinces = (
    <Menu onClick={handleMenuClick}>
        <Menu.Item key="1">AB</Menu.Item>
        <Menu.Item key="2">BC</Menu.Item>
        <Menu.Item key="3">MB</Menu.Item>
        <Menu.Item key="3">NB</Menu.Item>
        <Menu.Item key="3">NL</Menu.Item>
        <Menu.Item key="3">NT</Menu.Item>
        <Menu.Item key="3">NS</Menu.Item>
        <Menu.Item key="3">NU</Menu.Item>
        <Menu.Item key="3">ON</Menu.Item>
        <Menu.Item key="3">PE</Menu.Item>
        <Menu.Item key="3">SK</Menu.Item>
        <Menu.Item key="3">YT</Menu.Item>
    </Menu>
    );



class Navbar extends React.Component {
    state = {
        current: "Main"
    };

    handleClick = e => {
        console.log("click ", e);
        this.setState({
        current: e.key
        });
    };

render() {
    return (
        <div>

            <div>
                <img className = "logo" src={logo} />

                <Dropdown className = "provinces" overlay={provinces}>
                    <Button>
                        ON <DownOutlined />
                    </Button>
                </Dropdown>

                <Search
                    className = "search"
                    placeholder="Search Online"
                    enterButton="Search"
                    size="large"
                    onSearch={value => console.log(value)}
                />

                <Button className = "button1" >Login</Button>

                <Button className = "button1" >Sign Up</Button>

                <Button className = "cart" type="link" icon={<ShoppingCartOutlined/>} >Cart</Button>

            </div>

            <Menu className = 'nvbar' mode="horizontal" onClick={this.handleClick} selectedKeys={[this.state.current]} style={{ height : 60}}>
                <SubMenu className = 'department' title="Department" icon={<AppstoreOutlined />}>
                    <Menu.ItemGroup title="Grocery & Household">
                        <Menu.Item key="setting:1001">Meat & Seafood</Menu.Item>
                        <Menu.Item key="setting:1002">Snack & Candy</Menu.Item>
                        <Menu.Item key="setting:1003">Vegan Food</Menu.Item>
                        <Menu.Item key="setting:1004">Water & Beverages</Menu.Item>
                    </Menu.ItemGroup>
                    <Menu.ItemGroup title="Health & Pharmacy">
                        <Menu.Item key="setting:2001">Beauty</Menu.Item>
                        <Menu.Item key="setting:2002">Vitamins & Minerals</Menu.Item>
                        <Menu.Item key="setting:2003">Home Health Care</Menu.Item>
                        <Menu.Item key="setting:2004">First Aids</Menu.Item>
                    </Menu.ItemGroup>
                </SubMenu>
                <Menu.Item key="Main" className = 'main'>
                    <Link className = 'text1' to="/">
                        Main Page
                    </Link>
                </Menu.Item>
                <Menu.Item key="Map" className = 'map' >
                    <Link className = 'text1' to="/map">
                        Weekly Special
                    </Link>
                </Menu.Item>
                <Menu.Item key="Advice" className = 'advice'>
                    <Link className = 'text1' to="/advice">
                        New Arrivals
                    </Link>
                </Menu.Item>
                <Menu.Item key="News" className = 'news'>
                    <Link className = 'text1' to="/news">
                        On Sale
                    </Link>
                </Menu.Item>
            </Menu>
        </div>
    );
  }
}

export default Navbar;