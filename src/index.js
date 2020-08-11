import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Example1} from "./new-work-on/react-hooks/sub-comps/DraftHooks";

ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<Example1 />, document.getElementById('hooks'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA


serviceWorker.unregister();
//serviceWorker.register(); //Izhar - I changed it (and don't feel change - and did problems)
