import React from 'react'
import './ContactForm.css'
import Navbar from './Navbar'
import Footer from './Footer'
import emailjs from '@emailjs/browser';
import { useState } from "react";
import { useRef } from "react";


function ContactForm() {
  const formRef = useRef();
  const [isEmailSent, setIsEmailSent] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      await emailjs.sendForm('service_t00swx9', 'template_9wah38i', formRef.current, 'xd4EFFwVRqkkVe96v');
      console.log("Message Sent");
      setIsEmailSent(true);
      window.location.reload();
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };
  return (
    <div>
    <Navbar/>

        <div class="content">
    
    <div class="container">
      <div class="row align-items-stretch no-gutters contact-wrap">
        <div class="col-md-12">
          <div class="form h-100">
            <h3 className='text-center'>Schedule a Meeting.</h3>
            <hr></hr>
            <form className="mb-5" ref={formRef} onSubmit={sendEmail}>
              <div class="row">
                <div class="col-md-6 form-group mb-3">
                  <label for="" class="col-form-label">Purpose *</label>
                  <input type="text" class="form-control" name = "purpose"  placeholder="Purpose" required/>
                </div>
                <div class="col-md-6 form-group mb-3">
                  <label for="" class="col-form-label">First Name *</label>
                  <input type="text" class="form-control" name = "first_name"  placeholder="First Name" required/>
                </div>
                <div class="col-md-6 form-group mb-3">
                  <label for="" class="col-form-label">Last Name *</label>
                  <input type="text" class="form-control" name = "last_name"  placeholder="Last Name" required/>
                </div>
                <div class="col-md-6 form-group mb-3">
                  <label for="" class="col-form-label">Country Name *</label>
                  <input type="text" class="form-control" name = "country_name"  placeholder="Country Name" required/>
                </div>
                <div class="col-md-6 form-group mb-3">
                  <label for="" class="col-form-label">Timing *</label>
                  <input type="text" class="form-control" name = "user_timing"  placeholder="Timing" required/>
                </div>
                <div class="col-md-6 form-group mb-3">
                  <label for="" class="col-form-label">Email Address</label>
                  <input type="text" class="form-control" name = "user_email"  placeholder="Email Address" required/>
                </div>
                <div class="col-md-6 form-group mb-3">
                  <label for="" class="col-form-label">Share your Website Link *</label>
                  <input type="text" class="form-control" name = "link"  placeholder="Share your Website Link" required/>
                </div>
                <div class="col-md-6 form-group mb-3">
                  <label for="" class="col-form-label">How did you hear about us *</label>
                  <input type="text" class="form-control" name = "source"  placeholder="How did you hear about us" required/>
                </div>
              </div>
              
              <div className="row">
                    <div className="col-md-12 form-group">
                      <input type="submit" value="Send Message" className="btn btn-primary py-2 px-4" />
                      <span className="submitting"></span>
                    </div>
                  </div>
            </form>
            {isEmailSent && (
                <p className="text-success text-center mt-3">Message Sent Successfully</p>
            )}
            <div id="form-message-warning mt-4"></div> 
            <div id="form-message-success">
              Your message was sent, thank you!
            </div>

          </div>
        </div>
      </div>
    </div>

  </div>
  <Footer/>
    </div>
  )
}

export default ContactForm