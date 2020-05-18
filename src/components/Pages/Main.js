import React from 'react';
import './Main.scss';
import { Row, Col, Carousel, Card, Tag, Button, Tabs, Layout } from 'antd';
import MainCarousel from '../const/MainCarousel';
import MainNewArrivals from '../const/MainNewArrivals';
import MainWeeklySpecial from '../const/MainWeeklySpecial';
import MainWeeklySpecialTag from '../const/MainWeeklySpecialTag';
import MainNewArrivalsTag from '../const/MainNewArrivalsTag';
import MainMostPurchasedFood from '../const/MainMostPurchasedFood';
import MainMostPurchasedFoodTag from '../const/MainMostPurchasedFoodTag';
import imgHolder from "../../img/unknow.png";
import { LeftOutlined, RightOutlined,ShoppingCartOutlined,PlusOutlined } from '@ant-design/icons';
import axios from "axios"; 

class Main extends React.Component {

render(){

    return(
        
        <div>
         
            {/* MainCarousel */}
                <div>
                    <MainCarousel/>
                </div>

            {/* Weeklyspecial */}

                {/* MainWeeklySpecialTag */}
                <div>
                    <MainWeeklySpecialTag />
                </div>

                {/* MainWeeklySpecial */}
                <div className = "weeklybar">
                    <MainWeeklySpecial />
                </div>

            {/* New Arrivals */}

                {/* MainNewArrivalsTag */}
                <div>
                    <MainNewArrivalsTag />
                </div>

                {/* MainNewArrivals */}
                <div className = "NewarrivalsContainer">
                    < MainNewArrivals/>
                </div>

            {/* Most Purchased Food */}
                <div>
                <MainMostPurchasedFoodTag/>
                </div>

                <div className = "MostPurchasedFoodContainer">
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