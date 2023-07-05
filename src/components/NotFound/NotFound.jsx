import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function NotFound() {
  let navigate = useNavigate()
  return (
    <>
    <div className="container p-5 vh-100">
        <div className="d-flex flex-column h-100 justify-content-center align-items-center">
          <h1 className='primary' style={{fontSize:"126px"}}>404</h1>
          <h2 className='h1 primary'>Page Not Found</h2>
          <button className='btn btn-outline-primary btn-lg my-5' onClick={()=>{navigate("/LatestNews")}}>Go Home</button>
        </div>
    </div>
    </>
  )
}
