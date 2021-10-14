import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';

import proj_slam from "../images/proj_slam.png";
import proj_rest from "../images/proj_rest.png";
import proj_img from "../images/proj_img.png";

export default function CarouselComponent() {
    return (
        <div className="carousel-container"> 
            <Carousel autoPlay dynamicHeight={false} showThumbs={false}>
                <div style={{height:"600px"}}>
                    <img src={proj_img} />
                    <p className="legend">Image Processing</p>
                </div>
                <div style={{height:"600px"}}>
                    <img src={proj_rest} />
                    <p className="legend">Restaurant Recommendation</p>
                </div>
                <div style={{height:"600px"}}>
                    <img src={proj_slam} />
                    <p className="legend">Slam</p>
                </div>
            </Carousel>
        </div>
    );
}