import React from 'react';
import './Cart.scss';
import { Button, Carousel, Card, Tag, InputNumber } from 'antd';
import imgHolder from "../../img/unknow.png";
import QueueAnim from 'rc-queue-anim'

function onChange(value) {
    console.log('changed', value);
}

class Cart extends React.Component {
    render(){
        return(
            <div>
                <Card className = "box">
                    <img className="img" src={imgHolder} />
                    <Button className = "name" type="link">Product Name</Button>
                    <Card className = "qty" >Qty</Card>
                    <InputNumber className = "qtybox" min={1} max={10} defaultValue={1} onChange={onChange} />
                    <Button className = "remove" >Remove</Button>
                    <Card className = "pricelabel" >Price</Card>
                    <Card className = "pricenum" >$ 2.00</Card>

                </Card>
            </div>
        )
    }
}

export default Cart;