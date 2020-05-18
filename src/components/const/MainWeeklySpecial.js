import React from 'react';
import axios from "axios"; 
import Slider from "react-slick";
import '../Pages/Main.scss';
import imgHolder from "../../img/unknow.png";
import { LeftOutlined, RightOutlined,ShoppingCartOutlined,PlusOutlined } from '@ant-design/icons';
import { Row, Col, Carousel, Card, Tag, Button, Tabs } from 'antd';

class MainWeeklySpecial extends React.Component {
    state = {
        product: [],
        user: []
    };

    componentWillMount() {
        axios.get("http://localhost:8080/api/product").then(r => {
                let data = r.data;
                if (data.length > 6) {
                    data = data.splice(0,6);
                } 
                this.setState({
                    product: data
                });
            });
        axios.get("http://localhost:8080/api/product").then(r => {
                this.setState({
                    user: r.data
                });
            });
    }
    
    render() {
       

    return (
        <div>
                <Card className = "weeklyshowbarcon">
                <Row justify="space-around" gutter={[1, 1]}>
                        {this.state.product.map((ele, idx) => (
                            <Col span={3}>
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
                            </Col>
                        ))}
                </Row> 
                </Card>
            </div>
    );
    }
}

export default MainWeeklySpecial;