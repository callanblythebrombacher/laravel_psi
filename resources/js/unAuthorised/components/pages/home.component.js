import React from 'react';
import {Button, Carousel, Form} from "react-bootstrap";
import placeholder1 from "../../../../images/coverImage.jpg"
import {isMobile, isTablet} from "react-device-detect";

export default function Home(){
    return(
        <div className={"homepage"} >
                    { isMobile === true || isTablet === true ? (
                        <Carousel indicators={true} variant="dark">
                        <Carousel.Item>
                        <img
                        className="d-block w-100 h-auto"
                        src={placeholder1}
                        alt="First slide" />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-auto"
                        src={placeholder1}
                        alt="Second slide"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-auto"
                        src={placeholder1}
                        alt="Third slide"
                    />

                </Carousel.Item>
                        </Carousel>
                        ) : (
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
                        )}
            <Form style={{margin:"10px", background:'white'}}>
                <h3>Get Connected and ... <br/> contact us</h3>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicText" >
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                        as="textarea"
                        placeholder="Leave us a message"
                        style={{ height: '200px', margin:'20px' }}
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}
