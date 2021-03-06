import React from 'react';
import axios from "axios"; 
import Slider from "react-slick";
import '../Pages/Main.scss';
import imgHolder from "../../img/unknow.png";
import { LeftOutlined, RightOutlined,ShoppingCartOutlined,PlusOutlined } from '@ant-design/icons';
import { Row, Col, Carousel, Card, Tag, Button, Tabs } from 'antd';

class MainNewArrivalsTag extends React.Component {
    
    render() {

    return (
    <Card className = "newarrivalstag">
        <a className = "newarrivalstext">New Arrivals</a>
        <a className = "more" type ="link">View All</a>
    </Card>
    )
    }
}

export default MainNewArrivalsTag;