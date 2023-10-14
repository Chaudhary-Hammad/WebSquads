import React from 'react'
import css from '../Components/Home.css';
import brand from '../Components/img/brand.png'
import AutoplaySlider from './AutoplaySlider';
import card1 from '../Components/img/card1.jpg';
import card2 from '../Components/img/card2.jpg';
import card3 from '../Components/img/card7.jpg';
import card4 from '../Components/img/card4.jpg';
import card5 from '../Components/img/card5.jpg';
import card6 from '../Components/img/card6.jpg';
import card7 from '../Components/img/card7.jpg';
import Navbar from './Navbar';
import FeedBackSlider from './FeedBackSlider';
import Footer from './Footer';
import { NavLink } from 'react-router-dom';


function Home() {

  return (
    
    <>
    
    <div className='gifs'>
    <Navbar/>
      <div className='container backgroundd'>
        <div className='row'>
          <div className='col-md-12'>
            <h6 className='text-center mt-4 fw-bold text-success'>WEBSITE, BRANDING <span className='header-text'>& DIGITAL MARKETING</span></h6>
            <h3 className='text-center mt-5  fw-bold heading'>EVERYTHING IN ONE PLACE</h3>
            <p className='text-center para mt-4'>WebSquads is your ultimate destination for comprehensive digital solutions, offering everything from progressive web development to impactful digital marketing services. Consistently, efficiently, and sustainably grow your business with our diverse range of offerings—all under one roof.
</p>
          </div>
        </div>
      </div>
      <div className='container mt-5'>
        <div className='row'>
          <div className='col-md-6 d-flex custom-button '>
          <button className='btn-2'><i class="btn-icon me-2 fa-solid fa-phone"></i>Book a free consulation</button>
          <button className='btn-1 mx-3'>Explor our services<i class="btn-icon fa-solid fa-circle-chevron-down"></i></button>
          </div>
        </div>
      </div>
      </div>
      
   
   
      <div className='container-fluid sec1-main'>
        <div className='row'>
          <div className='col-md-6'>
            <img src={brand} className='img-fluid' />
          </div>
          <div className='col-md-6'>
            <p className='brand-para text-white fw-bold rounded'>NO FUSS PURCHASE!</p>
            <h1 className='brand-heading mt-5'>UNIFIED DIGITAL <br /> COMMUNICATIONS</h1>
            <p className='brand-para2 mt-5'>Whether it be for your branding, website, or digital marketing needs, we have them all ready and yours for the taking in three simple steps.</p>
            <p className='brand-para2 mt-3'>WebSquads gives you every service you need for your business, with no hidden charges, and tailored contracts!</p>
            <NavLink to='/ContactForm'>
            <button className='brand-btn-22 mx-3'><i class="btn-icon me-2 fa-solid fa-phone"></i>Book a free consulation</button>
            </NavLink>
            <button className='brand-btn-23 mt-3'>Explor our services<i class="btn-icon fa-solid fa-circle-chevron-down"></i></button>
          </div>
        </div>
      </div>

                     <div className='CARDS'></div>

{/* .........../.............. */}
      <div className='container mt-5'>
        <div className='row'>
          <div className='col-md-12'>
            <h1 className='text-center fw-bold grow'>Ready <span className='underline'>To Grow Your<br /> Business?</span></h1>
            <p className='text-center fs-5 mt-5 brand-para2'>Contact us today to discuss how our services can help you<br /> achieve your goals.</p>
          </div>
        </div>
      </div>             

    {/* ...................... */}

    <div className='container mt-5 border'>
      <div className='row'>
        <div className='col-md-12'>
          <h3 className='fs-1 mt-1 mx-3'>Our Clients!</h3>
         <AutoplaySlider/>
        </div>
      </div>
    </div>
    {/* ............ */}
    <div className='container blog-section'>
      <div className='row'>
        <div className='col-md-6'>
          <h6 className='blog-para text-center text-white rounded p-2 fw-bold'>INSIGHTS AND INSPIRATION</h6>
        </div>
       
             </div>
    </div>
    {/*  */}
    <div className='container mt-5'>
      <div className='col-md-12'>
        <h2 className='blogItem fs-1 fw-bold'>Our <span className='underline'>Blog</span></h2>
        <p className='.para mt-4'>Digital Marketing Tips: Stay Ahead of the Game</p>
      </div>
    </div>
    {/* carosel-cards */}
    

    <div className='container mt-5'>
      <div className='row'>
        <div className='col-md-4'>
            <div className='container main'>
              <div className='card'>
                <div className='image'>
                  <img src={card1} />
                </div>
                <div className='content'>
                  <h3>SEO</h3>
                  <p>DIn publishing and graphic design,           Lorem ipsum is a placeholder text               commonly used to demonstrate the visual         form of a document or a typeface without         relying on meaningful content.</p>
                </div>
              </div>
            </div>
   
        </div>
        <div className='col-md-4'>
            <div className='container main'>
              <div className='card'>
                <div className='image'>
                  <img src={card2} />
                </div>
                <div className='content'>
                  <h3>web Design</h3>
                  <p>DIn publishing and graphic design,           Lorem ipsum is a placeholder text               commonly used to demonstrate the visual         form of a document or a typeface without         relying on meaningful content.</p>
                </div>
              </div>
            </div>
   
        </div>
        <div className='col-md-4'>
            <div className='container main'>
              <div className='card'>
                <div className='image'>
                  <img src={card3} />
                </div>
                <div className='content'>
                  <h3>SEO</h3>
                  <p>DIn publishing and graphic design,           Lorem ipsum is a placeholder text               commonly used to demonstrate the visual         form of a document or a typeface without         relying on meaningful content.</p>
                </div>
              </div>
            </div>
   
        </div>
      </div>
      <div className='row'>
        <div className='col-md-4'>
            <div className='container main'>
              <div className='card'>
                <div className='image'>
                  <img src={card4} />
                </div>
                <div className='content'>
                  <h3>SEO</h3>
                  <p>DIn publishing and graphic design,           Lorem ipsum is a placeholder text               commonly used to demonstrate the visual         form of a document or a typeface without         relying on meaningful content.</p>
                </div>
              </div>
            </div>
   
        </div>
        <div className='col-md-4'>
            <div className='container main'>
              <div className='card'>
                <div className='image'>
                  <img src={card5} />
                </div>
                <div className='content'>
                  <h3>web Design</h3>
                  <p>DIn publishing and graphic design,           Lorem ipsum is a placeholder text               commonly used to demonstrate the visual         form of a document or a typeface without         relying on meaningful content.</p>
                </div>
              </div>
            </div>
   
        </div>
        <div className='col-md-4'>
            <div className='container main'>
              <div className='card'>
                <div className='image'>
                  <img src={card6} />
                </div>
                <div className='content'>
                  <h3>SEO</h3>
                  <p>DIn publishing and graphic design,           Lorem ipsum is a placeholder text               commonly used to demonstrate the visual         form of a document or a typeface without         relying on meaningful content.</p>
                </div>
              </div>
            </div>
   
        </div>
      </div>
    </div>
   
   {/* ...... */}
  
        <div className='bg-image mt-5'>
        <canvas className='canva'></canvas>
          <div className='container'>
            <div className='row'>
              <div className='col-md-4'>
                <h6 className=' text-white p-1 rounded bg-para'>OUR CLIENTS LOVE US</h6>
                 <h2 className='text-white mt-3 custom-h2 fw-bold'>Hear from Our Happy Clients</h2>
                 <p  className='text-white mt-3 custom-h2-p '>Take a look at the glowing reviews and success stories from some of our happy customers to see how WebSquads can help your business achieve its goals.</p>
                 <NavLink to='/contact'>
                 <button className='btn-1 custom-btn1'> <i class="btn-icon me-2 fa-solid fa-phone"></i>Contact us</button>
                 </NavLink>
              </div>
              <div className='col-md-8'>
              <FeedBackSlider/>
              </div>
            </div>
          </div>
        </div>




        <Footer/>
    </>
  )
}

export default Home