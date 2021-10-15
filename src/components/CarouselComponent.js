import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import "./CarouselComponent.css";
import { Carousel } from 'react-responsive-carousel';

import proj_rest from "../images/proj_rest.png";
import proj_img from "../images/proj_img.png";
import proj_ACV from "../images/proj_ACV.png";
import proj_med from "../images/proj_med.png";

export default function CarouselComponent() {
    return (
        <div className="carousel-container"> 
            <Carousel autoPlay dynamicHeight={false} showThumbs={false}>
                <div style={{height:"600px"}}>
                    <img src={proj_ACV} />
                    <p className="legend">Market Report</p>
                </div>
                <div style={{height:"600px"}}>
                    <img src={proj_rest} />
                    <p className="legend">Restaurant Recommendation</p>
                </div>
                <div style={{height:"600px"}}>
                    <img src={proj_med} />
                    <p className="legend">Medical Service</p>
                </div>
                <div style={{height:"600px"}}>
                    <img src={proj_img} />
                    <p className="legend">Image Processing</p>
                </div>
                
                {/* <div style={{height:"600px"}}>
                    <img src={proj_slam} />
                    <p className="legend">Slam</p>
                </div> */}
            </Carousel>
        </div>
    );
}