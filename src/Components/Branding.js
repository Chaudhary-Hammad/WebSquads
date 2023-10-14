import React from 'react';
import web from '../Components/img/mission.png';
import botom from '../Components/img/botom1.jpg';
import Navbar from './Navbar';
import AutoplaySlider from './AutoplaySlider';
import Banner from './Banner';
import FeedBackSlider from './FeedBackSlider';
import Footer from './Footer';
import { NavLink } from 'react-router-dom';
import BrandingCards from './BrandingCards';



function Branding() {
  return (
    <>
             <Navbar/>

<div className='container mt-2'>
    <div className='row'>
        <div className='col-md-7'>
            <h1 className='sec-1-para fw-bold mt-4'>Welcome to Websquad's Branding Services</h1>
            <p className='mt-5 fs-5'> Where we believe that a brand is not just a logo; it's an experience, a perception, and a promise. Our team of creative minds is dedicated to shaping your brand identity into a compelling narrative that captures hearts and minds. From startups to established businesses, we offer comprehensive branding solutions that establish your presence, differentiate your offerings, and leave an indelible mark in the minds of your audience.</p>
        </div>

        <div className='col-md-4 parent'>
            <img className=' img-fluide image2 vert-move btom-img' src={botom} />
            <img className='img-fluide image1 w-100 mt-2 rounded-start ' src={web} />

        </div>
    </div>
</div>
<div className='container mt-5'>
    <div className='row'>
        <div className='col-md-6 col-sm-12 '>
            {/* <button className='btn1'>View Pricing<i class="btn-icon fa-solid fa-circle-chevron-down"></i></button> */}
            <NavLink to='/about us'>
                        <button className='btn2 mx-3'><i class="btn-icon me-2 fa-solid fa-phone"></i>About WebSquads</button>
                        </NavLink>
                        </div>
    </div>
</div>
<div className='container my-5'>
    <div className='row'>
        <div className='col-md-12 col-sm-12'>
            <AutoplaySlider />
        </div>
    </div>
</div>

<div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <div className=' text-center'>
                            <p className='simple-para  fw-bolder rounded m-auto mt-4'>Discover Your Ideal Branding Solution with Websquads</p>
                            <h3 className='fw-bold fs-2 mt-3'>Choose Your Perfect Branding Package</h3>
                            <p className='mt-3'>At Websquads, we understand that every business is unique, and so are its branding needs. That's why we offer<br></br> a range of carefully crafted branding packages tailored to suit diverse requirements. Whether you're a startup seeking<br></br> a memorable identity or an established business aiming to revitalize your brand, our packages provide a clear path to a distinctive<br></br> and impactful brand identity. Choose your perfect branding package today and let Websquads guide you on a journey of brand transformation<br></br> that resonates with your audience and sets you apart in the market.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container bg-light p-3 packeges'>
                <div className='row'>
                    <div className='col-md-6'>
                        <p className='packeges-p rounded'>Pricing</p>
                        <h3 className='fw-bold mt-5'>Elevate Your Brand with Websquads' Expertise</h3>
                        <p className='mt-3 packeges-p2'>Websquads' branding services go beyond logos and colors – we craft immersive brand experiences. Our creative team fuses strategy, design, and storytelling to shape brands that resonate. Whether you're a startup, SME, or enterprise, we're here to transform your identity into a captivating narrative that leaves a lasting impression. Let Websquads be your partner in building a brand that stands out, connects, and thrives in the digital world.
</p>
                    </div>
                    <div className='col-md-6 card-h shadow-sm rounded'>
                        <div className=' rounded d-flex justify-content-arround mt-5 '>
                            <h6 className='fw-bold mx-2 mt-2'>Packages</h6>
                            <select className='mx-5 px-4 py-2 rounded shadow w-50 '>
                                <option>Choose an option</option>
                                <option>ABC</option>
                                <option>BAC</option>
                                <option>CAB</option>
                            </select>
                        </div>
                        <div className='border-bottom mt-3'></div>
                        <div>
                            <button className='btn btn-secondary mt-3 mx-2 py-2 px-4 fw-bold'>Signup</button>
                        </div>
                        <p className='rounded m-auto mt-4 packege-write-p'>HAVE QUESTIONS ABOUT OUR PRICING?</p>
                        <p className='mt-3 text-center'>We'll help you choose the package that's right for your business and<br /> answer any questions you may have. Don't wait, schedule your<br /> consultation now.</p>
                        <div className='d-flex mt-5'>
                            <p>Share this:</p>
                            <a href='#'>
                                <i class="fa-brands fa-facebook mx-3 mt-1"></i>
                            </a>
                            <a href='#'>
                                <i class="fa-brands fa-twitter mx-2 mt-1"></i>
                            </a>
                            <a href='#'>
                                <i class="fa-brands fa-instagram mx-3 mt-1"></i>

                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container mt-5 bg-light p-4'>
                <div className='row'>
                    <div className='col-md-6'>
                        <div className='bg-img'>
                            <div className='img-content'>
                                <h1 className='fw-bold text-white mx-5'>Did you know?</h1>
                                <p className='text-white mx-5 mt-3'>38 percent of visitors will stop engaging with a website if the content or layout is unattractive.<br />–Blue Corona</p>
                                <NavLink to = '/ContactForm'>
                                <button className='btn2 mx-5 mt-4'><i class="btn-icon me-2 fa-solid fa-phone"></i>Book a free consulation</button>
                                </NavLink></div>
                        </div>
                    </div>
                    <div className='col-md-6 '>
                        <div className='border border-2 border-top-0'>
                            <p className='text-center fw-bold'>Unlimited Possibilities</p>
                            <h2 className='text-center fw-bold p-3 mt-4'>Protecting Your Brand Identity with Websquads</h2>
                            <p className='p-3 mx-2 mt-4'>In the digital age, brand identity is precious. At Websquads, we take the responsibility of securing your brand identity seriously. Our comprehensive branding solutions not only create impactful visual elements but also ensure consistency and authenticity across all touchpoints. From logos to messaging, we craft a coherent brand identity that resonates with your audience. Trust Websquads to fortify your brand's identity and maintain its integrity, ensuring your business stands strong in a competitive landscape.
                            <br></br><br></br>
                            you don’t need to look and pay for separate experts who can help you fix your page. We are known for helping businesses grow by ensuring that their WordPress and WooCommerce websites bring in actual revenues that increase the value of their businesses, and not merely design an online billboard.
                            </p>
                            
                       
                        </div>

                    </div>
                </div>
            </div>
        <div className='mt-5'>
            <Banner/>
        </div>
{/*  */}
<BrandingCards/>
        <div className='background-img mt-5'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-4'>
                <h6 className=' text-white p-1 rounded bg-para'>OUR CLIENTS LOVE US</h6>
                 <h2 className='text-white mt-3 fw-bold'>Hear from Our Happy Clients</h2>
                 <p className='text-white mt-3 fs-6'>Take a look at the glowing reviews and success stories from some of our happy customers to see how WebSquads can help your business achieve its goals.</p>

                 <NavLink to='/contact'>
                 <button className='btn-1 custom-btn1'> <i class="btn-icon me-2 fa-solid fa-phone"></i>Contact us</button>
                 </NavLink></div>
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





<h1></h1>
export default Branding