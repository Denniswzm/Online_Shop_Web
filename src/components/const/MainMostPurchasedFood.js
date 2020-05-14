import React from 'react';
import '../Pages/Main.scss';
import { Row, Col, Carousel, Card, Tag, Button, Tabs } from 'antd';

class MainMostPurchasedFood extends React.Component {
    render (){
        const { TabPane } = Tabs;

    function callback(key) {
        console.log(key);
    }
    
    return (
        <div className = "MainCollapsel">

            <Tabs className = "foodguide" defaultActiveKey="1" onChange={callback} type="card">
                <TabPane tab="Fresh Vegetables" key="1">
                    Content of Tab Pane 1
                </TabPane>
                <TabPane tab="Fresh Fruit" key="2">
                    Content of Tab Pane 2
                </TabPane>
                <TabPane tab="Gluten-Free Favorites" key="3">
                    Content of Tab Pane 3
                </TabPane>
                <TabPane tab= "High Quality Fresh Seafood" key="4">
                </TabPane>
            </Tabs>
                
        </div>
    )
    }
}

export default MainMostPurchasedFood;