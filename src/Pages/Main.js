import React from 'react';
import './Main.scss';
import { Row, Col,Carousel, Card, Tag } from 'antd';
import QueueAnim from 'rc-queue-anim'
import img1 from "../img/img001.jpg";
import img2 from "../img/img002.jpg";
import img3 from "../img/img003.jpg";
import img4 from "../img/img004.jpg";
import img5 from "../img/img005.jpg";
import imgHolder from "../img/unknow.png";
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
            <QueueAnim delay={1000} className = "queue-simple">
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

            <Tag color="#2db7f5">WeeklySpecial</Tag>

            <div className="WeeklySpecial" key="ani1">
                <Row type="flex" justify="space-between" align="middle" key="ani1">
                
                {this.state.news.map((ele, idx) => (
                    <Col span={6}>
                    <Card
                    style={{ width: "25em", height: "35em", marginTop:"4em", marginLeft:"1.5em"}}
                    hoverable
                    cover={
                        <img
                        alt="cover"
                        src={
                            ele.cover
                            ? ele.cover
                            : imgHolder
                        }
                        onError={e => {
                            e.target.onError = null;
                            e.target.src = imgHolder;
                        }}
                        style={{ maxwidth: 200, maxHeight:240 }}
                        />
                    }
                    >
                    {console.log(ele)}
                    <Card.Meta
                    title={ele.productName}
                    description={
                            <div>
                                <p>{ele.price}</p>
                            </div>
                            }
                    />
                    </Card>
                    </Col>
                ))}
                
                </Row>
            </div>

            <Tag color="#2db7f5">New Arrivals</Tag>

            <Tag color="#2db7f5">Guess You Want</Tag>
            </QueueAnim>
        )
    }
}

export default Main;