import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import Weather from '../Weather/Weather';


export default function LayOut() {
  return (
    <>
    <NavBar/>
    <Weather/>
    <div className="d-flex flex-column m-0 p-0">
    <div className="control"><Outlet/></div>
    <div className=""><Footer/></div>
    </div>
    </>
)
}
