import React from 'react';
import ReactDOM from 'react-dom';
import 'modern-normalize/modern-normalize.css';
import './index.css';

import App from './App';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    {/* <BrowserRouter></BrowserRouter> - следит за изменениями в
    адресной строке создаваемого приложения */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);

// ReactDOM.render(<App />, document.querySelector('#root'));
