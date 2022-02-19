import React from 'react';
import {Button, CloseButton, Form} from "react-bootstrap";
import createUser from "../../../api/registerApi";
export default function SignupForm(props){

    const [state, setState] = React.useState(
        {
            FirstName:'',
            LastName:'',
            Email:'',
            Password:'',
            ConfirmPassword:''
        });

        const handleOnChange =(e) => {
            const target = e.target
            const name = target.name
            const value = target.value

            setState(
                {
                    ...state,
                    [name]:value
                }
            )
        }

        const handleOnSubmit = async (e) => {
            e.preventDefault()
            const response = await createUser(state.Email, state.FirstName, state.LastName, state.Password, state.ConfirmPassword)
            console.log(response)
        }

    return(
        <Form id="signupForm" style={{margin:"10px", background:'white'}}>
            <div className="d-flex flex-row justify-content-between">
                <h3>Signup</h3>
                <CloseButton onClick={props.close}/>
            </div>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control value={state.Email} onChange={handleOnChange} name="Email" type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicText" >
                <Form.Label>First Name</Form.Label>
                <Form.Control value={state.FirstName} onChange={handleOnChange} name="FirstName" type="text"  placeholder="First name"  />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicText" >
                <Form.Label>Last Name</Form.Label>
                <Form.Control value={state.LastName} onChange={handleOnChange} name="LastName" type="text"  placeholder="Last name"  />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicText" >
                <Form.Label>Password</Form.Label>
                <Form.Control value={state.Password} onChange={handleOnChange} name="Password" type="Password"  placeholder="Password"  />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicText" >
                <Form.Label>Password</Form.Label>
                <Form.Control value={state.ConfirmPassword}  onChange={handleOnChange} name="ConfirmPassword" type="Password"  placeholder="Password"  />
            </Form.Group>

            <Button onClick={handleOnSubmit} variant="primary" type="Button">
                Submit
            </Button>
        </Form>
    )
}

