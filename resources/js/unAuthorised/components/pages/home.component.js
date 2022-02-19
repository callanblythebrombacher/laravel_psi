import React from 'react';
import {Button, Carousel, Form} from "react-bootstrap";
import placeholder1 from "../../../../images/coverImage.jpg"
import {isMobile, isTablet} from "react-device-detect";
import ContactForm from "../forms/contactForm.component";
import CarouselComponent from "../shared_components/desktop/carousel.component";
import CarouselMobileComponent from "../shared_components/mobile/carouselMobile.component";


export default function Home(){

    return(
        <div className={"homepage"} >
            { isMobile === true || isTablet === true ? (
                <div>
                    <CarouselMobileComponent />
                    <ContactForm />
                </div>
                ) : (
                    <div>
                        <CarouselComponent />
                        <ContactForm />
                    </div>
                )}
        </div>
    )
}
