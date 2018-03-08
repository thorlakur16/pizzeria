import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
//import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { BrowserRouter as Router} from 'react-router-dom';
import reducers from './reducers/reducers';

ReactDOM.render(<Provider store={createStore(reducers, applyMiddleware(thunk))}><Router><App /></Router></Provider>, document.getElementById('root'));
registerServiceWorker();
