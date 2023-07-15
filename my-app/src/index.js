import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Gallery from './ReactWork/Gallery';
import JSXinMup from './ReactWork/JSXinMup';
import CurlyBrace from './ReactWork/JSX/CurlyBrace';
import AddExp from './ReactWork/JSX/AddExp';
import One from './Conditional rendering/One'
import { Profile } from './ReactWork/Profile';
import Card1 from './Conditional rendering/Card1';
import Final from './Conditional rendering/Final';
import Combine from './Conditional rendering/Combine';
import Data from './Conditional rendering/Data';
import Data2 from './Conditional rendering/Data2';

// import DynamicRep from './ReactWork/DynamicRep';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div > 
    {/* <One /> */}
    {/* <App/> */}
   {/* <Gallery/> */}
   {/* <JSXinMup/> */}
    {/* <Profile /> */}
    {/* <DynamicRep/> */}
    {/* <CurlyBrace/> */}
    {/* <AddExp/> */}
    {/* <Card1/> */}
    {/* <Combine/> */}
    <Data2/>
  </div>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
