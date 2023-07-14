import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Gallery from './ReactWork/Gallery';
import JSXinMup from './ReactWork/JSXinMup';
import CurlyBrace from './ReactWork/JSX/CurlyBrace';
import AddExp from './ReactWork/JSX/AddExp';
import { Profile } from './ReactWork/Profile';
// import DynamicRep from './ReactWork/DynamicRep';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div > 
    
    <App/>
   {/* <Gallery/> */}
   {/* <JSXinMup/> */}
    {/* <Profile /> */}
    {/* <DynamicRep/> */}
    {/* <CurlyBrace/> */}
    {/* <AddExp/> */}
  </div>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
