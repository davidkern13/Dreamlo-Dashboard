import React, { useState, useCallback, useEffect, Suspense, lazy } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from 'react-router-dom';

import { dreamloPublicCode, dreamloPrivateCode  } from "../../store/login/action";
import { requestApi  } from "../../store/dreamlo_api/action";

import LoadingSpinner from '../../loading';

import {
    Wrapper
} from './style.js';

const LoginDecoration = lazy(() => import('../../components/Login/Decoration/Decoration'));
const LoginForm = lazy(() => import('../../components/Login/Form/Form'));

/*
* Login State Component
*/
const Login = () => {
    const store_content = useSelector(state => state);
    const dispatch = useDispatch();

    const [public_code, setPublicCode] = useState("");
    const [private_code, setPrivateCode] = useState("");
    const [user, setUser] = useState(false);

    useEffect( () => {
        if(store_content.dreamlo_keys.private_code !== null){
            setUser(true);
        }

    }, [store_content]);

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
        dispatch(requestApi());
    };

    if(user){
        return <Redirect to='/dashboard' />
    }

    return (
        <Wrapper>
            <Suspense fallback={<LoadingSpinner />}>
                <LoginDecoration />

                <LoginForm
                    publicVal={public_code}
                    privateVal={private_code}
                    onChangePublic={onChangePublic}
                    onChangePrivate={onChangePrivate}
                    onEnter={onEnter}
                    onSubmit={onSubmit}
                />
            </Suspense>
        </Wrapper>
    );
}

export default Login;

