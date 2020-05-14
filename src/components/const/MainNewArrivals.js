import React from 'react';
import axios from "axios"; 
import Slider from "react-slick";
import '../Pages/Main.scss';
import imgHolder from "../../img/unknow.png";
import { LeftOutlined, RightOutlined,ShoppingCartOutlined,PlusOutlined } from '@ant-design/icons';
import { Row, Col, Carousel, Card, Tag, Button, Tabs } from 'antd';

class MainNewArrivals extends React.Component {
    state = {
        product: []
    };

    componentWillMount() {
        axios.get("http://localhost:8080/api/product").then(r => {
                this.setState({
                    product: r.data
                });
            });
    }
    
    render() {
        var settings = {
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 3
    };

    return (
        <div className = "NewarrivalsBar">
            <Slider {...settings}>
                {this.state.product.map((ele, idx) => (
                    <div>
                        <Card
                            className = "weeklypics"
                            cover={
                            <img alt="cover"
                            src={ ele.cover ? ele.cover : imgHolder}
                            onError={e => {
                            e.target.onError = null;
                            e.target.src = imgHolder;
                            }}
                            />
                            }
                        >
                        {console.log(ele)}
                        <Card.Meta className = "weeklydes"/>
                            <a className = "productN">{ele.productName}</a>
                            <p className = "productP">${ele.price}</p>
                            <Button className="add" type="primary" shape="circle" icon={<PlusOutlined/>} />
                        </Card>
                    </div>
                ))}
            </Slider>
        </div>
    );
    }
}

export default MainNewArrivals;