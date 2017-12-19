import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);

//로컬 스테이트가 유지되지 않음.
/*
if(module.hot){
  module.hot.accept();
}
*/
