import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import CV from './CV';
import Services from './Services';
import Portfolio from './Portfolio';
import Contact from './Contact';




ReactDOM.render(
  <React.StrictMode>
    <App />
    <CV/>
    <Services/>
    <Portfolio/>
    <Contact/>
  </React.StrictMode>,
  document.getElementById('root')
);

