import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import App from './components/App';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './reducers';
import 'bootstrap/dist/css/bootstrap.min.css';

// render the main component
const store = createStore(reducers);
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
    ,
    document.getElementById('app')
);
