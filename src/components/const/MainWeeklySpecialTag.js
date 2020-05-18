import React from 'react';
import axios from "axios"; 
import Slider from "react-slick";
import '../Pages/Main.scss';
import imgHolder from "../../img/unknow.png";
import { LeftOutlined, RightOutlined,ShoppingCartOutlined,PlusOutlined } from '@ant-design/icons';
import { Row, Col, Carousel, Card, Tag, Button, Tabs } from 'antd';

class MainWeeklySpecialTag extends React.Component {
    
    render() {

    return (
    <Card className = "weeklyspecialtag">
        <a className = "weeklyspecialtext">Weekly Special</a>
        <p className = "weeklydate"> 2020/01/01 - 2020/01/07 </p>
        <a className = "more" type ="link">View All</a>
    </Card>
    )
    }
}

export default MainWeeklySpecialTag;