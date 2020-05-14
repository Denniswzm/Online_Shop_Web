import React from 'react';
import './Main.scss';
import { Row, Col, Carousel, Card, Tag, Button, Tabs } from 'antd';
import MainCarousel from '../const/MainCarousel';
import MainNewArrivals from '../const/MainNewArrivals';
import MainWeeklySpecial from '../const/MainWeeklySpecial';
import MainMostPurchasedFood from '../const/MainMostPurchasedFood';
import imgHolder from "../../img/unknow.png";
import { LeftOutlined, RightOutlined,ShoppingCartOutlined,PlusOutlined } from '@ant-design/icons';
import axios from "axios"; 

class Main extends React.Component {
    // state = {
    //     product: [],
    //     user: []
    // };
    
// componentWillMount() {
//     axios.get("http://localhost:8080/api/product").then(r => {
//             let data = r.data;
//             if (data.length > 6) {
//                 data = data.splice(0,6);
//             } 
//             this.setState({
//                 product: data
//             });
//         });
//     axios.get("http://localhost:8080/api/product").then(r => {
//             this.setState({
//                 user: r.data
//             });
//         });
// }

render(){
    return(
        <div>
            {/* MainCarousel */}
            <MainCarousel/>

            {/* Weeklyspecial */}
            <Card className = "weeklyspecialtag">
                <a className = "weeklyspecialtext">Weekly Special</a>
                <p className = "weeklydate"> 2020/01/01 - 2020/01/07 </p>
            </Card>

            {/* MainWeeklySpecial */}
            <div>
                <MainWeeklySpecial/>
            </div>

            {/* <div className = "weeklyshowbar">
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
            </div> */}

            {/* New Arrivals */}
            <Card className = "newarrivalstag">
                <a className = "newarrivalstext">New Arrivals</a>
            </Card>

            <div className = "NewarrivalsContainer">
                < MainNewArrivals/>
            </div>

            {/* Most Purchased Food */}
            <Card className = "weeklyspecialtag">
                <a className = "weeklyspecialtext">Most Purchased Food</a>
            </Card>

            <div>
            < MainMostPurchasedFood />
            </div>



            <Card className = "GYWtag">
                <a className = "GYWtext">Guess You Want</a>
            </Card>

            {/* <div className = "weeklyshowbar">
                <Card className = "weeklyshowbarcon">
               
                </Card>
            </div> */}

        </div>
        )
    }
}

export default Main;