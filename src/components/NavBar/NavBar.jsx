import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import  { apiContext } from '../../Context/ApiContext';
import { NavLink } from 'react-router-dom';
import { NavDropdown } from 'react-bootstrap';

export default function NavBar() {
  
let {countriesArray,setCountry,countries}= useContext(apiContext)

let countryChange=(flag="Egypt")=>{
  setCountry(flag)
  localStorage.setItem("flag",flag)
}

return (
    <>
      <Navbar collapseOnSelect expand="lg" fixed='top'> 
      <Container fluid className='px-5'>
        <NavLink className={'navbar-brand fs-4 primary fw-bold'} to={"/LatestNews"}>News In Hands</NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"  />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto px-5">
            <NavLink className={"nav-link primary"} to={"/LatestNews"}>Latest News</NavLink>
            <NavLink className={"nav-link primary"} to={"/General"}>General</NavLink>
            <NavLink className={"nav-link primary"} to={"/Sports"}>Sports</NavLink>
            <NavLink className={"nav-link primary"} to={"/Health"}>Health</NavLink>
            <NavLink className={"nav-link primary"} to={"/Science"}>Science</NavLink>
            <NavLink className={"nav-link primary"} to={"/Technology"}>Technology</NavLink>
            <NavLink className={"nav-link primary"} to={"/Economy"}>Economy</NavLink>
            <NavDropdown className='fw-bold' title={ <img src={`https://www.countryflagicons.com/SHINY/24/${localStorage.getItem("flag")? countries[localStorage.getItem("flag")].toUpperCase():"EG"}.png`}/>} id="collasible-nav-dropdown">
              {countriesArray?.map((ele,index)=><NavDropdown.Item key={index} className='d-flex justify-content-between' 
              onClick={()=>{countryChange(ele)}} >{ele}  <img src={`https://www.countryflagicons.com/SHINY/24/${countries[ele].toUpperCase()}.png`}/>
              </NavDropdown.Item>)}
            </NavDropdown>
          </Nav>
          <div className="px-3"></div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}
