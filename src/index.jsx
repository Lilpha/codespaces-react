import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import ImageList from './Copy/ImageList'
import MainContainer from './Copy/MainContainer';
import KakaoMap from './Copy/KakaoMap'
import NavBar from './Copy/NavBar';
import Banner from './Copy/Banner';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Banner/>
    <NavBar/>
      <div style={{display:'flex'}}>
        <MainContainer/>
        <KakaoMap/>
      </div>
    </React.StrictMode>
);

reportWebVitals();
