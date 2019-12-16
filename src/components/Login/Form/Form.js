import React from "react";

import {
    FormLogin,
    Wrap,
    Form,
    Input,
    Label,
    Button,
    Message,
    TitleLogin
} from './style.js';

import { MESSAGE, LOGIN } from '../../../Enums/Login/emuns'

/*
* LoginForm Without state
*/

const LoginForm = ({ onChangePublic, onChangePrivate, onSubmit }) =>{

    let input_pub_code;
    let input_prt_code;

    return (
        <FormLogin>
            <Wrap>
                <TitleLogin>{LOGIN}</TitleLogin>
            </Wrap>

            <Form onSubmit={onSubmit}>
                <Label>Public Code</Label>
                <Input
                    type="text"
                    placeholder={`Public Code`}
                    onChange={onChangePublic}
                    ref={node => (input_pub_code = node)}
                />
                <Label>Private Code (It's long, get all of it!)</Label>
                <Input
                    type="text"
                    placeholder={`Private Code`}
                    onChange={onChangePrivate}
                    ref={node_ => (input_prt_code = node_)}
                />
                <Button type="submit" onKeyDown={onSubmit}>Go to dashboard</Button>
                <Message>{MESSAGE}</Message>
            </Form>
        </FormLogin>
    );
}

export default LoginForm;


