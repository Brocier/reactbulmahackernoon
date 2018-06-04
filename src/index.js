import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom'
import './index.css';
import * as contentful from 'contentful'
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const client = contentful.createClient({space: '2mvesjofoymx', accessToken: '263961428e3cbede5034d86bce47b122d1be0c19b0bd3ca837aaf3bc6c4a4f1d'})

client
  .getEntries()
  .then(entries => {
    entries
      .items
      .forEach(entry => {
        if (entry.fields) {
          console.log(entry.fields)
        }
      })
  })

ReactDOM.render((
  <Router>
    <App/>
  </Router>
), document.getElementById('root'));
registerServiceWorker();
