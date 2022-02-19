import React from 'react';
import {Button, Form} from "react-bootstrap";

export default function ContactForm( ){
    return(
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
                    style={{ height: '100px', margin:'20px 0 20px 0'}}
                />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
        }

