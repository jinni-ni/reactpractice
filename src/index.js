import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import App3 from './App3';
import App4 from 'App4';
import App5 from 'App5';
import App6 from 'App6';
import App7 from 'App7';
import App9 from 'App9';
import App10 from 'App10';
import TodoList from 'TodoList';
import reportWebVitals from './reportWebVitals';
import EpisodeList from 'EpisodeList';

ReactDOM.render(
   <React.StrictMode>
      <App10 />
      {/* <TodoList /> */}
      {/* <App /> */}
   </React.StrictMode>,
   document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
