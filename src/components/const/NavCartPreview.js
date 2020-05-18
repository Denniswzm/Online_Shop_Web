import React from "react";
import '../Pages/Navbar.scss';
import logo from "../../img/Logo.png";
import { Select, Menu, Cascader, Input, Button, Dropdown,Card } from "antd";
import { MailOutlined, AppstoreOutlined, SettingOutlined, SearchOutlined, AudioOutlined, DownOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";
import provinces from "../const/provinces";
import axios from "axios"; 
import { connect } from 'react-redux';
import NavProvBar from '../const/NavProvBar';
import NavSearchBar from '../const/NavSearchBar'

class NavCartPreview extends React.Component {

    render() {

    return (
        <Card className = "shopping-cart" style={{display: this.props.showCart ? "block" : "none"}}>
                
        <div class="shopping-cart-header">
            <Button className="title" icon={<ShoppingCartOutlined/>} type="link" href = "/Cart">Shopping Cart</Button>  
        </div>

        <ul class="shopping-cart-items">
            <li class="items">
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/cart-item1.jpg" />
                <span className="item-name">Sony DSC-RX100M III</span>
                <span className="item-price">$849.99</span>
                <span className="item-quantity">Quantity: 01</span>
            </li>

            <li className="items">
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/cart-item2.jpg" />
                <span className="item-name">KS Automatic Mechanic...</span>
                <span className="item-price">$1,249.99</span>
                <span className="item-quantity">Quantity: 01</span>
            </li>

            <li className="items">
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/cart-item3.jpg"/>
                <span className="item-name">Kindle, 6" Glare-Free To...</span>
                <span className="item-price">$129.99</span>
                <span className="item-quantity">Quantity: 01</span>
            </li>
        </ul>

        <div class="shopping-cart-total">
        <span className="lighter-text">Total:</span>
        <span className="main-color-text">$2,229.97</span>
        </div>

        <Button className="details" href = "/Cart">Cart Detials</Button>
        
        <Button className="checkout" type="primary">Checkout</Button>

       

        </Card>
    )
    }
}

export default NavCartPreview;