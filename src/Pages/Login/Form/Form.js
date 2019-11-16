import React, { useCallback } from "react";

import {MESSAGE} from "../../../Enums/Login/emuns";

import {
    FormLogin,
    Form,
    Input,
    Label,
    Button,
    Message
} from './style.js';

/*
* LoginForm Without state
*/

export const LoginForm = ({ publicVal, privateVal, onChangePublic, onChangePrivate, onEnter, onSubmit }) =>{

    return (
        <FormLogin>
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


