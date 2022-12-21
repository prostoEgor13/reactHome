import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Router } from 'react-router-dom';
// import { Routes,Route,Link, Router } from 'react-router-dom';
// import StartPage from './components/StartPage/StartPage';
// import Toys from './components/Toys/Toys';

import TreeDecoration from './components/TreeDecoration/TreeDecoration';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} 
from "react-router-dom";
import routes from"./consts"

const router = createBrowserRouter(routes);
{/* <Router>
  <Routes>
    <Route path='/Toys' element={<Toys/>}/>
  </Routes>
</Router> */}
 


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
