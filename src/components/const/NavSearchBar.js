import React from "react";
import '../Pages/Navbar.scss';
import { Select, Menu, Cascader, Input, Button, Dropdown,Card } from "antd";
import { MailOutlined, AppstoreOutlined, SettingOutlined, SearchOutlined, AudioOutlined, DownOutlined, ShoppingCartOutlined } from '@ant-design/icons';

const { Search } = Input;

const { SubMenu } = Menu;

const { Option } = Select;

class NavSearchBar extends React.Component {
   
    render() {
       
    return (
        <div>
            <Search
                    className = "search"
                    placeholder="Search Online"
                    enterButton="Search"
                    size="large"
                    onSearch={value => console.log(value)}
                />
        </div>
    );
    }
}

export default NavSearchBar;