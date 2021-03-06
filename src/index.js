import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// Redux Store
import {Provider} from 'react-redux'
import {configureStore} from './store'
import {loadBlog} from './store/Blog.js'
import {loadMedium} from './store/Medium.js'

const store = configureStore()
store.dispatch(loadBlog())
store.dispatch(loadMedium())

ReactDOM.render((
  <Provider store={store}>
    <Router>
      <App/>
    </Router>
  </Provider>
), document.getElementById('root'));
registerServiceWorker();
