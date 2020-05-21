 import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App'// assumes .js automatically if you dont put anything else in file name
import * as serviceWorker from './serviceWorker';
import 'tachyons';

ReactDOM.render(<App/>, document.getElementById('root'));
serviceWorker.unregister();
 