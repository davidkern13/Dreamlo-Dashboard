import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { initialStore } from "./store/index";

import * as serviceWorker from './serviceWorker';

import App from "./App";

const store = initialStore();

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);

serviceWorker.unregister();
