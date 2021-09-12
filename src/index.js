import React from 'react';
import ReactDOM from 'react-dom';
import App from './js/components/App';
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
            <App />
    </Provider>,
  document.getElementById('root')
);
