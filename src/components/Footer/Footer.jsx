import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <><footer>
      <div className="container-fluid">
        <div className="row gy-3">
          <div className="col-md-6 col-lg-4">
            <h2>News In Hands</h2>
            <div className="d-flex category flex-wrap">
              <Link to={"/General"}>General</Link>|
              <Link to={"/Sports"}>Sports</Link>|
              <Link to={"/Health"}>Health</Link>|
              <Link to={"/Science"}>Science</Link>|
              <Link to={"/Technology"}>Technology</Link>|
              <Link to={"/Economy"}>Economy</Link>
            </div>
            <div className="text-muted my-2">
              News-In-HandsⒸ2023
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <ul>
              <li> <i className="fa-solid fa-location-dot"></i> <span className='text-dark'>Alexandria , Egypt</span></li>
              <li> <i className="fa-solid fa-phone"></i> <span className='text-dark'>+201007073261</span></li>
              <li> <i className="fa-solid  fa-message"></i> <span className='text-dark'>mohamedsamirelshami@gmail.com</span></li>
            </ul>
          </div>
          <div className="col-md-6 col-lg-4">
            <h3 >Follow us</h3>
            <div className="links">
             <Link to={"https://www.facebook.com/profile.php?id=100082859111033"} target='__blank'> <i className='fa-brands fa-solid fa-facebook-f bg-primary text-light'></i> </Link>
             <Link to={"https://www.linkedin.com/in/mohamed-samir-a7693b274/"} target='__blank'> <i className='fa-brands fa-solid fa-linkedin-in bg-light text-primary'></i> </Link>
             <Link to={"https://github.com/llMOllSamir"} target='__blank'> <i className='fa-brands fa-solid fa-github bg-secondary text-light'></i> </Link>
             <Link to={"https://vercel.com/llmollsamir"} target='__blank' className='rotate-270'> <i className='fa-play fa-solid me-0  bg-dark text-light'></i> </Link>
            </div>
          </div>
        </div>
      </div>
    </footer></>
  )
}
 