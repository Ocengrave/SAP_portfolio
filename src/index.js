import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state from './redux/state.js'
ReactDOM.render(

  <React.StrictMode>
    {/* будем передавать пропсы из index.js */}
    <App state={state}/>

  </React.StrictMode>,
  document.body

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
