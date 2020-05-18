import React from 'react';
import {Carousel} from 'antd';
import img1 from "../../img/img001.jpg";
import img2 from "../../img/img002.jpg";
import img3 from "../../img/img003.jpg";
import img4 from "../../img/img004.jpg";
import img5 from "../../img/img005.jpg";
// import '../Pages/Main.scss';

class MainCarousel extends React.Component {
    render (){
        
    return (
        <div className = "MainCollapsel">

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
    )
    }
}

export default MainCarousel;