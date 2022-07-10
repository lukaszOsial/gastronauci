import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App.js';
import { store } from './store.js';


const render = () => {
  ReactDOM.render(
    <App state={store.getState()} dispatch={store.dispatch} />,
    document.getElementById('root')
  );
};
store.subscribe(render);
render();

