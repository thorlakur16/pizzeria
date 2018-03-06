import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
<<<<<<< Updated upstream
//import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { BrowserRouter as Router} from 'react-router-dom';

ReactDOM.render(<Router><App /></Router>, document.getElementById('root'));
=======
import reducer from './reducers/reducers';

//const AppWithRedux = connect(null, { getDetails })(App);
ReactDOM.render(<Provider store={createStore(reducer)}><App /></Provider>, document.getElementById('root'));
>>>>>>> Stashed changes
registerServiceWorker();
