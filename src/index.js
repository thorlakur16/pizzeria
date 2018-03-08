import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
//import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { BrowserRouter as Router} from 'react-router-dom';
import reducer from './reducers/reducers';

//const AppWithRedux = connect(null, { getDetails })(App);
ReactDOM.render(<Provider store={createStore(reducer)}><Router><App /></Router></Provider>, document.getElementById('root'));
registerServiceWorker();
