import React from 'react';
import { useParams } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import { Link,BrowserRouter, Routes, Route,MemoryRouter,useLocation, } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CommunitiesPage from './Components/CommunitiesPage/CommunitiesPage';
import MainNavbar from './Components/Navbar/MainNavbar';
import SearchPage from './Components/SearchPage/SearchPage';
import Footer from './Components/Footer/Footer';
import MapSearch from './Components/MapSearch/MapSearch';
import AreaPage from './Components/CommunitiesPage/AreaPage';
import * as serviceWorker from "./serviceWorker";
import "stylecraft/dist/stylecraft.css";
import "mapbox-gl/dist/mapbox-gl.css";
import "./Components/MapListting/css/index.css";
import "./Components/MapListting/css/fonts.css";
import "./Components/MapListting/css/input-range.css";
import "./Components/MapListting/css/hacks.css";
import "./Components/MapListting/css/mapbox-hacks.css"; 
import "./Components/MapListting/css/fonts.css";
import "./Components/MapListting/css/input-range.css";
import "./Components/MapListting/css/hacks.css";
import "./Components/MapListting/css/mapbox-hacks.css";
import CountyPages from './Components/CommunitiesPage/CountyPages';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <MainNavbar/>
        <Routes>
        <Route index element={<App />}/>
        <Route path="communities" element={<CommunitiesPage />}/>
        <Route path="property-search" element={<SearchPage  ShowHead={true}/>}/>
        <Route path="property-map-search" element={<MapSearch/>}/>
        <Route path="/area-page" element={ <AreaPage /> } />
        <Route path="/area-page/:pageId" element={ <CountyPages /> } />
        </Routes>
      <Footer/>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
serviceWorker.register();
