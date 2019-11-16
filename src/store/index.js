import {applyMiddleware, createStore} from 'redux'

import loggerMiddleware from '../middleware/logger'
import thunkMiddleware from 'redux-thunk'

import rootReducer from './reducer'

import monitorReducersEnhancer from '../enhancers/monitorReducer'
import { composeWithDevTools } from 'redux-devtools-extension'

export function initialStore(){
    const middleware = [thunkMiddleware,loggerMiddleware];
    const middlewareEnhancer = applyMiddleware(...middleware);

    const enhancers = [middlewareEnhancer, monitorReducersEnhancer];
    const composedEnhancers = composeWithDevTools(...enhancers);

    const store = createStore(rootReducer, composedEnhancers);

    return store;
}

