import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowseRouter as Router} from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <App/>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
