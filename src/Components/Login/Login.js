import React, { useState, useCallback } from "react";
import { useDispatch } from "react-redux";

import { LoginDecoration } from '../../Pages/Login/Decoration/Decoration';
import { LoginForm } from '../../Pages/Login/Form/Form';

import { dreamloPublicCode, dreamloPrivateCode  } from "../../store/login/action";

import {
    Wrapper
} from './style.js';

/*
* Login State Component
*/

export const Login = () => {
    const dispatch = useDispatch();

    const [public_code, setPublicCode] = useState("");
    const [private_code, setPrivateCode] = useState("");

    const onChangePublic = useCallback(e => {
        setPublicCode(e.target.value);
    }, []);

    const onChangePrivate = useCallback(e => {
        setPrivateCode(e.target.value);
    }, []);

    const onEnter = useCallback(() => {
        onSubmit();
    },[]);

    const onSubmit = (event) => {
        event.preventDefault();
        dispatch(dreamloPublicCode(public_code));
        dispatch(dreamloPrivateCode(private_code));
    };

    return (
        <Wrapper>
            <LoginDecoration />
            <LoginForm
                publicVal={public_code}
                privateVal={private_code}
                onChangePublic={onChangePublic}
                onChangePrivate={onChangePrivate}
                onEnter={onEnter}
                onSubmit={onSubmit}
            />
        </Wrapper>
    );
}

