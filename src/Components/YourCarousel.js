import img1 from './img/brand1.jpg'
import img2 from './img/brang1.jpg'
import img3 from './img/brand3.jpg'
import img4 from './img/brand4.webp'


import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './YourCarouselStyles.css';

const YourCarousel = () => {
  const images = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg',
    // Add more image paths as needed
  ];

  return (
    <div className="carousel-container">
      <Carousel
        showArrows={true}
        showThumbs={false}
        infiniteLoop={true}
        showStatus={false}
        centerMode={true}
      >
        {/* First Slide */}
        <div className='container'>
          <div className='row'>
            <div className='col-md-4'>
            <div className="carousel-image-container">
          <img src={img1} alt="Image 1" />
        </div>
            </div>
            <div className='col-md-4'>
            <div className="carousel-image-container">
          <img src={img2} alt="Image 1" />
        </div>
            </div>
            <div className='col-md-4'>
            <div className="carousel-image-container">
          <img  src={img2} alt="Image 2" />
        </div>
            </div>
           
          </div>
        </div>
       
    <div className='container'>
      <div className='row'>
        <div className='col-md-4'>
        <div className="carousel-image-container">
            <img src={img3} alt="Image 2" />
          </div>
        </div>
        <div className='col-md-4'>
        <div className="carousel-image-container">
            <img src={img4} alt="Image 2" />
          </div>
        </div>
        <div className='col-md-4 rounded'>
              <div className="carousel-image-container">
            <img  src={img2} alt="Image 2" />
          </div>
              </div>   
      </div>
    </div>   


   <div className='container '>
    <div className='row'>
      <div className='col-md-4'>
      <div className="carousel-image-container">
          <img src={img3} alt="Image 2" />
        </div>
      </div>
      <div className='col-md-4'>
      <div className="carousel-image-container">
          <img src={img4} alt="Image 2" />
        </div>
      </div>
      <div className='col-md-4 rounded'>
            <div className="carousel-image-container">
          <img  src={img2} alt="Image 2" />
        </div>
            </div>
    </div>
   </div>   

      </Carousel>
    </div>
  );
};

export default YourCarousel;
