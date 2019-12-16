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

    const [user, setUser] = useState(false);

    useEffect( () => {

        let { dreamlo_keys : { private_code = null}, dreamlo_api : { status = false} } = store_content;

        if(private_code !== null && status){
            setUser(true);
        }
    }, [store_content]);

    const onChangePublic = useCallback(e => {
        dispatch(dreamloPublicCode(e.target.value));
    }, []);

    const onChangePrivate = useCallback(e => {
        dispatch(dreamloPrivateCode(e.target.value));
    }, []);

    const onSubmit = (event) => {
        event.preventDefault();
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
                    onChangePublic={onChangePublic}
                    onChangePrivate={onChangePrivate}
                    onSubmit={onSubmit}
                />
            </Suspense>
        </Wrapper>
    );
}

export default Login;

