import React from "react";
import './Navbar.scss'
import logo from "../../img/Logo.png";
import { Select, Menu, Cascader, Input, Button, Dropdown } from "antd";
import { MailOutlined, AppstoreOutlined, SettingOutlined, SearchOutlined, AudioOutlined, DownOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";
import provinces from "../const/provinces";
import { connect } from 'react-redux'

const { SubMenu } = Menu;

const { Search } = Input;

const { Option } = Select;

function handleChange(value) {

    console.log(`selected ${value}`);

}

export class Navbar extends React.Component {

    state = {
        current: "main",
        prov: "ON"
    };

    // componentWillUpdate(prevProps,prevState){
    //     this.setState({
    //         current: prevState.current,
    //         prov: prevState.prov,
    //         isLogin: prevState.isLogin
    //     })
    // }


    handleClick = e => {
        console.log("click ", e);
        this.setState({
        current: e.key
        });
    };
    

    // changeProv = e => {
    //     this.setState({
    //         prov: this.pv[e.key]
    //     });
    // }
    
    changeProv = e => {
        // console.log(e)
        this.setState({
            prov: provinces[e.key]
        });
    }

    prov = (
        <Menu onClick={this.changeProv}>
            { Object.keys(provinces).map((ele) => <Menu.Item key={ele}>{provinces[ele]}</Menu.Item>)}
        </Menu>
    )

//username & button change


render() {
    return (
        <div>

            <div>
                <img className = "logo" src={logo} />

                <Dropdown className = "provinces" overlay={this.prov}>
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

                { !this.props.isLogin ? <>
                <Button className = "button1" href = "/Login">Login</Button>
                <Button className = "button1" href = "/SignUp">Sign Up</Button></> 
                : 
                <Button className = "LoginUserName" type="link" href = "/Cat">Hello,User</Button>               
                }
                

                <Button className = "cart" type="link" icon={<ShoppingCartOutlined/>} href = "/Cart">Cart</Button>

            </div>

            <Menu className = 'nvbar' mode="horizontal" onClick={this.handleClick} selectedKeys={[this.state.current]} style={{ height : 60}}>
                <SubMenu className='department' title="Department" key="main" icon={<AppstoreOutlined />}>
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

const mapStateToProps = (state, ownProps) => {
    return {
        isLogin: state.user.isLogin,
    }
}

export default connect(mapStateToProps)(Navbar)
//export default Navbar;