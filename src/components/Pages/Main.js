import React from 'react';
import './Main.scss';
import { Row, Col,Carousel, Card, Tag,Button } from 'antd';
import img1 from "../../img/img001.jpg";
import img2 from "../../img/img002.jpg";
import img3 from "../../img/img003.jpg";
import img4 from "../../img/img004.jpg";
import img5 from "../../img/img005.jpg";
import imgHolder from "../../img/unknow.png";
import { LeftOutlined, RightOutlined,ShoppingCartOutlined,PlusOutlined } from '@ant-design/icons';
import axios from "axios"; 

class Main extends React.Component {
    state = {
        news: [],
        user: []
    };

componentWillMount() {
    axios.get("http://localhost:8080/api/product").then(r => {
            this.setState({
                news: r.data
            });
        });
    axios.get("http://localhost:8080/api/product").then(r => {
            this.setState({
                user: r.data
            });
        });
}

    render(){
    return(
        <div>
        
            <div className="Collapse1">

                <Carousel autoplay>
                    <div>
                        <img className="img" src={img1} />
                    </div>
                    <div>
                        <img className="img" src={img2} />
                    </div>
                    <div>
                        <img className="img" src={img3} />
                    </div>
                    <div>
                        <img className="img" src={img4} />
                    </div>
                    <div>
                        <img className="img" src={img5} />
                    </div>
                </Carousel>
                
            </div>

            {/* Weeklyspecial */}
            <Card className = "weeklyspecialtag">
                <a className = "weeklyspecialtext">Weekly Special</a>
                <p className = "weeklydate"> 2020/01/01 - 2020/01/07 </p>
            </Card>

            <div className = "weeklyshowbar">
                <Card className = "weeklyshowbarcon">
                <Row justify="space-around" gutter={[6, 6]}>
                        {this.state.news.map((ele, idx) => (
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

            <Card className = "newarrivalstag">
                <a className = "newarrivalstext">New Arrivals</a>
            </Card>

            <div className = "weeklyshowbar">
                {/* <Card className = "weeklyshowbarcon">
               
                </Card> */}
            </div>

            <Card className = "GYWtag">
                <a className = "GYWtext">Guess You Want</a>
            </Card>

            <div className = "weeklyshowbar">
                {/* <Card className = "weeklyshowbarcon">
               
                </Card> */}
            </div>

        </div>
        )
    }
}

export default Main;