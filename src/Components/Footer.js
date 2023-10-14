import React from 'react'
import {FaCcMastercard,FaCcStripe,FaCcVisa,FaCcApplePay, FaCreditCard,} from "react-icons/fa";
import logo from './img/navLogO.png';
import '../Components/Footer.css'
import { NavLink } from 'react-router-dom';

function Footer() {
  return (
    <>
    <div className='bg-light'>
       <div className='container mt-5 '>
        <div className='row'>
            <div className='col-md-4 mt-5'>
              <img className='img-fluid w-50' src={logo}/>
              <p className='mt-3 footer-para'>WebSquads is a unified communications platform that empowers business owners and promotes business growth through services that strengthen brand identity, and sustainably promote online presence to increase engagement.</p>
              <p className='fw-bold para'>Secure Payment</p>
              <FaCreditCard  className='fs-1 mx-2'/>
              <FaCcMastercard  className='fs-1 mx-2'/>
              <FaCcStripe  className='fs-1 mx-2'/> 
              <FaCcVisa  className='fs-1 mx-2'/>
              <FaCcApplePay  className='fs-1 mx-2'/>
            </div>
            <div className='col-md-2 mt-5'>
                <h3 className='para text-center fw-bold '>Services</h3>
                {/* <p className='mx-2 mt-3 footer-para'>Web Development</p> */}
                <ul>
                    <li>
                    <NavLink to='/website' className='footer-nav me-4' href=''>Website</NavLink> 
                    </li>
                    <li >
                    <NavLink to='/seo' className='footer-nav me-4' href=''>SEO</NavLink> 
                    </li>
                    <li>
                    <NavLink to="/Branding" className='footer-nav me-4' href=''>Branding</NavLink>  
                    </li>
                    <li>
                    <NavLink to='/UI/UX' className='footer-nav me-4' href=''>UI/UX</NavLink>  
                    </li>
                    <li>
                    <NavLink to='/about' className='footer-nav me-4' href=''>About Us</NavLink> 
                    </li>
                    <li>
                    <NavLink to='/BLOG' className='footer-nav me-4' href=''>Blog</NavLink> 

                    </li>
                    <li>
                    <NavLink to='/contact' className='footer-nav me-4' href=''>Contact</NavLink> 
                    </li>
                </ul>
                
            </div>
            <div className='col-md-3 mt-4'><br></br>
            <h3 className='text-center me-5 para fw-bold'>Contact</h3>
            <p className='mx-4 footer-para mt-3'><i class="btn-icon me-2 fa-solid fa-phone"></i>+ 92306 7207 637</p>
            <p className='mx-4 footer-para'><i class="btn-icon me-2 fa-solid fa-phone"></i>+ 92 303 7519 796</p>
            <p className='mx-4 footer-para'><i class=" btn-icon me-2 fs-5 fa-solid fa-location-dot"></i>Hassan Arcade, Chen One Rd, Block B People's Colony No 1, Faisalabad, Punjab 38000</p>
                
            </div>
            <div className='col-md-3 py-5 mt-2'>
                <div className=''>
                <iframe className='custom-map' width="300" height="300" id="gmap_canvas" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3405.1282879300475!2d73.10007157476565!3d31.410591352559145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x392269c2bfd5d8c9%3A0x19055fb0af7fb7ef!2sWebSquads!5e0!3m2!1sen!2s!4v1692859742505!5m2!1sen!2s" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                    
                </div>
            </div>
           </div>  
        </div>
      
       <div className='border border-bottom w-75 mx-auto  mt-5'></div>
        <div className='container'>
            <div className='row'>
                <div className='col-md-6'>
                    <h6 className='footer-para mt-3'>Copyright © WebSquads 2013-2023.</h6>
                </div>
                <div className='col-md-6 mt-3'>
                   <h6><span className='footer-para me-3'>Careers </span>
                   <span className='footer-para me-3'>Terms & Conditions</span>
                   <span className='footer-para me-3'>Privacy Policy</span></h6> 
                </div>
            </div>
        </div>
        
        <div class="top">
        <a href="https://wa.me/+923037519796?text=Hello%20there!"><ion-icon name="logo-whatsapp"></ion-icon></a>

        
    </div>
    </div>
    </>
  )
}

export default Footer