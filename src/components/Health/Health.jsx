import React, { useContext, useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import {Helmet} from "react-helmet";
import cover from "../../images/cover.jpg"
import Pagination from '@mui/material/Pagination';
import { apiContext } from '../../Context/ApiContext';

export default function Health() {
  let [isloading,setLoading]=useState(false)
  let [data,setData]=useState([])
  let {getNews,country}= useContext(apiContext)

  let getData= async (obj,callBack)=>{
    setLoading(true)
    let {data} = await getNews(obj);
    setLoading(false)
    callBack(data)
  }

  let pageChange = (num)=>{
    window.scrollTo(0,0)
    getData({category:"health",page:num},setData)
  }
  useEffect(()=>{
    getData({category:"health"},setData)
  },[])
  
  useEffect(()=>{
    getData({category:"health"},setData)
  },[country])
  return (
    <>
    <Helmet>
            <title>Health</title>
        </Helmet>
    <div className="container  py-5">
        <h1 className='primary mb-5'>Health</h1>
        {isloading?<><div id='loader'><div className="loader"></div>  </div></>:<>
      <div className="row g-3">
      {data && data?.articles?.map((ele,index)=><div key={index} className="col-lg-3 col-md-4">
          <Card className='h-100'>
        <Card.Img variant="top" height={"200px"} src={ele?.urlToImage?ele.urlToImage:cover} />
        <Card.Body>
          <Card.Title className='badge bg-primary text-light fs-6'>{ele?.source.name}</Card.Title>
          <Card.Text>
          {ele?.title}
          </Card.Text>
        </Card.Body>
        <Card.Footer><Card.Link href={ele?.url} className='fw-bold' target='_blank'>Read More...</Card.Link></Card.Footer>
    </Card></div>)}
      </div></>
      }
      <div className="d-flex justify-content-center my-5"><Pagination onChange={(e,page)=>{
          pageChange(page)
      }} count={data?.totalResults ? Math.ceil(data?.totalResults/20):5} shape="rounded" size="large" className=' bg-transparent' />
      
      </div>
    </div>
    
    </>
  )
}
