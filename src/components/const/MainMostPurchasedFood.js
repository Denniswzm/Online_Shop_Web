import React from 'react';
import axios from "axios"; 
import '../Pages/Main.scss';
import { Row, Col, Carousel, Card, Tag, Button, Tabs } from 'antd';
import imgHolder from "../../img/unknow.png";
import Slider from "react-slick";
import { LeftOutlined, RightOutlined,ShoppingCartOutlined,PlusOutlined } from '@ant-design/icons';

class MainMostPurchasedFood extends React.Component {
    state = {
        product: {}
    };

    componentWillMount() {
        axios.get("http://localhost:8080/api/product/cate/vege").then(r => {
                if (r.data.content.length > 6) {
                    r.data.content = r.data.content.splice(0,6);
                } 
                this.setState({
                    product: {
                        vege: r.data.content
                    }
                });
            });

    }

    render (){
        const { TabPane } = Tabs;

        const callback = (key) => { 
            console.log(key);
            axios.get("http://localhost:8080/api/product/cate/" + key).then(r => {
                    console.log(r)
                    let state = {};
                    state[key] = r.data.content
                    if (state[key].length > 6) {
                        state[key] = state[key].splice(0,6);
                    } 
                    console.log(state);
                    this.setState({
                        product: state
                    });
                });
        }

    return (
        <div>
            <Tabs className = "FoodBar" defaultActiveKey="vege" onChange={callback} type="card">
                <TabPane className = "" tab="Fresh Vegetables" key="vege">
                    <Card className = "">
                        <Row justify="space-around" gutter={[1, 1]}>
                                {this.state.product['vege'] && this.state.product['vege'].map((ele, idx) => (
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
                                            <p className = "foodP">${ele.price}</p>
                                            <Button className="add" type="primary" shape="circle" icon={<PlusOutlined/>} />
                                        </Card>
                                    </Col>
                                ))}
                        </Row> 
                    </Card>
                </TabPane>
                
                <TabPane tab="Fresh Fruit" key="fruit">
                    <Card className = "">
                        <Row justify="space-around" gutter={[1, 1]}>
                                {this.state.product['fruit'] && this.state.product['fruit'].map((ele, idx) => (
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
                                            <p className = "foodP">${ele.price}</p>
                                            <Button className="add" type="primary" shape="circle" icon={<PlusOutlined/>} />
                                        </Card>
                                    </Col>
                                ))}
                        </Row> 
                    </Card>
                </TabPane>

                <TabPane tab= "High Quality Fresh Seafood" key="seafood">
                    <Card className = "">
                        <Row justify="space-around" gutter={[1, 1]}>
                                {this.state.product['seafood'] && this.state.product['seafood'].map((ele, idx) => (
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
                                            <p className = "foodP">${ele.price}</p>
                                            <Button className="add" type="primary" shape="circle" icon={<PlusOutlined/>} />
                                        </Card>
                                    </Col>
                                ))}
                        </Row> 
                    </Card>
                </TabPane>

                <TabPane tab= "High Quality Fresh Meat" key="meat">
                    <Card className = "">
                        <Row justify="space-around" gutter={[1, 1]}>
                                {this.state.product['meat'] && this.state.product['meat'].map((ele, idx) => (
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
                                            <p className = "foodP">${ele.price}</p>
                                            <Button className="add" type="primary" shape="circle" icon={<PlusOutlined/>} />
                                        </Card>
                                    </Col>
                                ))}
                        </Row> 
                    </Card>
                </TabPane>
            </Tabs>
                
        </div>
    )
    }
}

export default MainMostPurchasedFood;