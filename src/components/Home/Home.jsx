import React, { useContext,useEffect,useState } from 'react';
import  { apiContext } from '../../Context/ApiContext';
import { Card } from 'react-bootstrap';
import cover from "../../images/cover.jpg"
import Slider from 'react-slick';
import {Helmet} from "react-helmet";
import { Link } from 'react-router-dom';

export default function Home() {
  let [isloading,setLoading]=useState(false)
  let [slid1,setSlide1]=  useState([])
  let [slid2,setSlide2]=  useState([])
  let [slid3,setSlide3]=  useState([])
  let [slid4,setSlide4]=  useState([])
  let [slid5,setSlide5]=  useState([])
  let [slid6,setSlide6]=  useState([])
  
let {getNews,country}= useContext(apiContext)

let SampleArrow = (props)=>{
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none" }}
      onClick={onClick}
    />)
}

const settings = {
  dots: false,
  infinite: true,
  speed: 750,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  cssEase: "linear",
  pauseOnHover: true,
  nextArrow: <SampleArrow />,
  prevArrow: <SampleArrow />,
  className:"h-100"
};

let getData= async (obj,callBack)=>{
  setLoading(true)
  let {data} = await getNews(obj);
  setLoading(false)
  callBack(data?.articles)
}

useEffect(()=>{
  getData({category:"general"},setSlide1)
  getData({category:"sports"},setSlide2)
  getData({category:"business"},setSlide3)
  getData({category:"health"},setSlide4)
  getData({category:"science"},setSlide5)
  getData({category:"technology"},setSlide6)
},[])

useEffect(()=>{
  getData({category:"general"},setSlide1)
  getData({category:"sports"},setSlide2)
  getData({category:"business"},setSlide3)
  getData({category:"health"},setSlide4)
  getData({category:"science"},setSlide5)
  getData({category:"technology"},setSlide6)
},[country])
  return (
    <>
      <Helmet>
            <title>Latest News</title>
        </Helmet>
    <div className="container  py-5">
        <h1 className='primary mb-5'>Latest News</h1>
        {isloading?<><div id='loader'><div className="loader"></div> </div></>:<>
      <div className="row g-3 gy-5">
       { slid1 && <div className="col-lg-6 ">
       <Slider {...settings}>
        {slid1.map((ele,index)=>
         <Card className="bg-dark text-dark border-0 position-relative" key={index}>
         <Card.Img src={ele?.urlToImage?ele.urlToImage:cover} height={"400px"}  alt="" />
         <Card.Body className=' position-absolute bottom-0  w-100 bg-light bg-opacity-75'>
          <Card.Title className='badge bg-light text-primary fs-5'>{ele?.source.name}</Card.Title>
          <Card.Text >
          {ele?.title}
          </Card.Text>
         </Card.Body>
          <button className="btn btn-warning  px-4 position-absolute top-0 end-0 m-4 me-4">
          <Card.Link href={slid2[1]?.url} className='fw-bold link' target='_blank'>Read More</Card.Link>
          </button>
         </Card>)}
       </Slider>
        </div>}
        {slid2&& <div className="col-lg-3">
          <Card className='h-100'>
        <Card.Img variant="top" height={"200px"}  src={slid2[0]?.urlToImage?slid2[0].urlToImage:cover} />
        <Card.Body>
          <Card.Title className='badge bg-primary text-light fs-6'>{slid2[0]?.source.name}</Card.Title>
          <Card.Text>
          {slid2[0]?.title}
          </Card.Text>
        </Card.Body>
        <Card.Footer><Card.Link href={slid2[0]?.url} className='fw-bold' target='_blank'>Read More...</Card.Link></Card.Footer>
    </Card></div>}
    {slid3&& <div className="col-lg-3">
          <Card className='h-100'>
          <Card.Title className='p-2 pt-3 px-3 fw-bold'>Top News</Card.Title>
        <Card.Img variant="top" className='px-3'  src={slid3[2]?.urlToImage?slid3[2].urlToImage:cover} />
        <Card.Body>
          <Card.Title className='badge bg-primary text-light fs-6'>{slid3[2]?.source.name}</Card.Title>
          <Card.Text>
          {slid3[2]?.title}
          </Card.Text>
        </Card.Body>
        <Card.Footer><Card.Link href={slid3[2]?.url} className='fw-bold' target='_blank'>Read More...</Card.Link></Card.Footer>
    </Card></div>}
    {slid4&& <div className="col-lg-6">
          <Card className='h-100'>
            <div className="row">
              <div className="col-6"><Card.Img variant="top" height={"300px"}  src={slid4[3]?.urlToImage?slid4[3].urlToImage:cover} /></div>
              <div className="col-6"> <Card.Body>
          <Card.Title className='badge bg-primary text-light fs-6'>{slid4[3]?.source.name}</Card.Title>
          <Card.Text>
          {slid4[3]?.title}
          </Card.Text>
          <Card.Link href={slid4[3]?.url} className='fw-bold position-absolute bottom-0 mb-4' target='_blank'>Read More...</Card.Link>
        </Card.Body></div>
            </div>
    </Card></div>}
        {slid5 && <div className='col-lg-3'>
      <Link to={slid5[5]?.url} target='_blank'>
      <Card className="bg-dark text-dark border-0 h-100">
         <Card.Img src={slid5[5]?.urlToImage?slid5[5].urlToImage:cover}   alt="" />
         <Card.Body className=' position-absolute bottom-0  w-100 bg-light bg-opacity-75'>
          <Card.Title className='badge bg-light text-primary fs-5'>{slid5[5]?.source.name}</Card.Title>
          <Card.Text >
          {slid5[5]?.title}
          </Card.Text>
         </Card.Body>
         </Card></Link>
    </div>}
    {slid6 && <div className='col-lg-3'>
      <Link to={slid6[5]?.url} target='_blank'>
      <Card className="bg-dark text-dark border-0 h-100">
         <Card.Img src={slid6[5]?.urlToImage?slid6[5].urlToImage:cover}   alt="" />
         <Card.Body className=' position-absolute bottom-0  w-100 bg-light bg-opacity-75'>
          <Card.Title className='badge bg-light text-primary fs-5'>{slid6[5]?.source.name}</Card.Title>
          <Card.Text >
          {slid6[5]?.title}
          </Card.Text>
         </Card.Body>
         </Card></Link>
    </div>}
      </div>
        </>}
    </div>
    
    </>
  )
}
