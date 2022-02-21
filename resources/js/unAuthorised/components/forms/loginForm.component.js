import React from 'react';
import {Button, CloseButton, Form} from "react-bootstrap";
import Login from "../../../api/loginApi"


export default function LoginForm(props){
    const [state, setState] = React.useState(
        {
        Email:'',
        Password:'',
    });

    const handleChange = (e) => {
        const target = e.target;
        const value = target.value;
        const name = target.name;
        setState({
            ...state,
            [name]: value,
        })
    }

    const handleSubmit = () => {
            Login(state.Email, state.Password)
    }

    return(
        <Form id="loginForm" className="bg-white" >
            <div className="d-flex flex-row justify-content-between">
                <h3>Login</h3>
                <CloseButton onClick={props.close}/>
            </div>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control onChange={handleChange} name="Email" value={state.Email} type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword" >
                <Form.Label>Email address</Form.Label>
                <Form.Control onChange={handleChange} name="Password" value={state.Password} type="password" placeholder="Enter password" />
            </ Form.Group>
            <Button variant="primary" type="button" onClick={handleSubmit}>
                Login
            </Button>
        </Form>
    )
}

