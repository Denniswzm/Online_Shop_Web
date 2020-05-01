import React from "react";
import './Navbar.scss'
import logo from "../img/Logo.png";
import { Row, Col, Menu, Cascader, Input, Button, Dropdown } from "antd";
import { MailOutlined, AppstoreOutlined, SettingOutlined, SearchOutlined, AudioOutlined, DownOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";

const { SubMenu } = Menu;

const { Search } = Input;

class Navbar extends React.Component {
    state = {
        current: "main",
        prov: "ON"
    };

    handleClick = e => {
        console.log("click ", e);
        this.setState({
        current: e.key
        });
    };

    changeProv = e => {
        this.setState({
            prov: this.pv[e.key]
        });
    }

    pv = {
        "1": "AB",
        "2": "BC",
        "3": "MB",
        "4": "NB",
        "5": "NL",
        "6": "NT",
        "7": "NS",
        "8": "NU",
        "9": "ON",
        "10": "PE",
        "11": "SK",
        "12": "YT",
    }

    provinces = (
        <Menu onClick={this.changeProv}>
            <Menu.Item key="1">AB</Menu.Item>
            <Menu.Item key="2">BC</Menu.Item>
            <Menu.Item key="3">MB</Menu.Item>
            <Menu.Item key="4">NB</Menu.Item>
            <Menu.Item key="5">NL</Menu.Item>
            <Menu.Item key="6">NT</Menu.Item>
            <Menu.Item key="7">NS</Menu.Item>
            <Menu.Item key="8">NU</Menu.Item>
            <Menu.Item key="9">ON</Menu.Item>
            <Menu.Item key="10">PE</Menu.Item>
            <Menu.Item key="11">SK</Menu.Item>
            <Menu.Item key="12">YT</Menu.Item>
        </Menu>
    );

render() {
    return (
        <div>

            <div>
                <img className = "logo" src={logo} />

                <Dropdown className = "provinces" overlay={this.provinces}>
                    <Button>
                        {this.state.prov} <DownOutlined />
                    </Button>
                </Dropdown>

                <Search
                    className = "search"
                    placeholder="Search Online"
                    enterButton="Search"
                    size="large"
                    onSearch={value => console.log(value)}
                />

                <Button className = "button1" href = "/Login">Login</Button>

                <Button className = "button1" href = "/SignUp">Sign Up</Button>

                <Button className = "cart" type="link" icon={<ShoppingCartOutlined/>} >Cart</Button>

            </div>

            <Menu className = 'nvbar' mode="horizontal" onClick={this.handleClick} selectedKeys={[this.state.current]} style={{ height : 60}}>
                <SubMenu className='department' title="Department" key="main" icon={<AppstoreOutlined />}>
                    <Menu.ItemGroup title="Grocery & Household">
                        <Menu.Item key="setting:1001" icon={<AppstoreOutlined />}>Meat & Seafood</Menu.Item>
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
                        Home
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