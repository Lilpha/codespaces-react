import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import 'bootstrap/dist/css/bootstrap.min.css';

import ImageList from './Copy/ImageList'
import MainContainer from './Copy/MainContainer';
import KakaoMap from './Copy/KakaoMap'
import NavBar from './Copy/NavBar';
import Banner from './Copy/Banner';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Banner/>
    <KakaoMap/>
  </React.StrictMode>
);

reportWebVitals();
