import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import AppChatForTwo from "./AppChatForTwo"
// import Card from "Dragging"

ReactDOM.render(<AppChatForTwo />, document.getElementById('root'));
registerServiceWorker();
