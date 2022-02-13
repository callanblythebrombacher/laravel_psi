import React from 'react';
import {Button, Carousel, Form} from "react-bootstrap";
import placeholder1 from "../../../images/coverImage.jpg"

export default function Home(){
    return(
        <div className={"homepage"}>
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
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicText" >
                    <Form.Label>Message</Form.Label>
                    <Form.Control type="textArea" placeholder="Message" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}
