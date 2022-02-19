import React from 'react';
import {Carousel} from "react-bootstrap";
import placeholder1 from "../../../../../images/coverImage.jpg";

export default function CarouselComponent (){
    return(
        <Carousel indicators={true} variant="dark">
            <Carousel.Item>
                <img
                    className="d-block w-auto h-50"
                    src={placeholder1}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-auto h-50"
                    src={placeholder1}
                    alt="Second slide"
                />

            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-auto h-50"
                    src={placeholder1}
                    alt="Third slide"
                />

            </Carousel.Item>
        </Carousel>
    )
}
