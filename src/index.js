import React from 'react';
import ReactDOM from 'react-dom';
import './scss/main.scss'
import App from './js/components/App';
import reportWebVitals from './reportWebVitals';
import {HashRouter} from "react-router-dom";
import {applyMiddleware, compose, createStore} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import {allReducers} from "./js/redux/reducers/allReducers";

const composeEnhancers = compose(
    applyMiddleware(thunk)
)

const store = createStore(allReducers, composeEnhancers);

ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <App />
        </HashRouter>
    </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
