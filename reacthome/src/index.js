import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Toys from './components/Toys/Toys';
import "./common/common.scss";
import "./common/mixins.scss";
import TreeDicoration from 'components/TreeDecoration/TreeDicoration';
import { Provider } from 'react-redux';
import { store } from 'store';







const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/toys' element={<Toys />} />
          <Route path='/treeDicoration' element={<TreeDicoration />} />
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode >
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
