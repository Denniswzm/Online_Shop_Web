import React from "react";
import '../Pages/Navbar.scss';
import { Select, Menu, Cascader, Input, Button, Dropdown,Card } from "antd";
import { MailOutlined, AppstoreOutlined, SettingOutlined, SearchOutlined, AudioOutlined, DownOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import provinces from "./provinces";

class NavProvBar extends React.Component {
   
        
    changeProv = e => {
        // console.log(e)
        this.setState({
            prov: provinces[e.key]
        });
    }

    state = {
        current: "main",
        prov: "ON",
        showCart: false
    };

    prov = (
        <Menu onClick={this.changeProv}>
            { Object.keys(provinces).map((ele) => <Menu.Item key={ele}>{provinces[ele]}</Menu.Item>)}
        </Menu>
    )

    render() {
       
    return (
        <div>
            <Dropdown className = "provinces" overlay={this.prov}>
                    <Button>
                        {this.state.prov} <DownOutlined />
                    </Button>
            </Dropdown>
        </div>
    );
    }
}

export default NavProvBar;