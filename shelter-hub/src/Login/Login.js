import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './Login.css';

function Login(props) {
    return (
        <Form>
            <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input type="email" name="email" id="exampleEmail" placeholder="Username" />
            </FormGroup>
            <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input type="password" name="password" id="examplePassword" placeholder="Password" />
            </FormGroup>
            <Button>Submit</Button>
        </Form>
    );
}

export default Login;