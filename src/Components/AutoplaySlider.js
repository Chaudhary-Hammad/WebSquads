import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import EPE from '../Components/img/EPE.webp'
import NGR from '../Components/img/NGR.webp'
import react from '../Components/img/react.webp'
import srub from '../Components/img/Srub.webp'
import syr from '../Components/img/SYR.webp'

const AutoplaySlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 1000, // Adjust this value for autoplay interval
    slidesToShow: 5,
    slidesToScroll: 1,
    // width:"100%",

  };

  return (
    <div className='container-fluide custom-none'>
      <div className='row'>
        <div className='col-md-12'>
    <div className="slider-container ml-auto">
      <Slider {...settings}>
        <div>
          <img src={react} alt="Slide 1" />
        </div>
        <div>
          <img src={EPE} alt="Slide 2" />
        </div>
        <div>
          <img src={NGR} alt="Slide 3" />
        </div>
        <div>
          <img src={react} alt="Slide 3" />
        </div>
        <div>
          <img src={syr} alt="Slide 3" />
        </div>
        <div>
          <img src={EPE} alt="Slide 3" />
        </div>
         
        {/* Add more slides as needed */}
      </Slider>
      </div>
    </div>
    </div>
    </div>
  );
};

export default AutoplaySlider;
