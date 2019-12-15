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

const LoginForm = ({ publicVal, privateVal, onChangePublic, onChangePrivate, onEnter, onSubmit }) =>{

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
                    value={publicVal}
                />
                <Label>Private Code (It's long, get all of it!)</Label>
                <Input
                    type="text"
                    placeholder={`Private Code`}
                    onChange={onChangePrivate}
                    value={privateVal}
                />
                <Button type="submit" onKeyDown={onEnter}>Go to dashboard</Button>
                <Message>{MESSAGE}</Message>
            </Form>
        </FormLogin>
    );
}

export default LoginForm;


