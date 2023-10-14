import React from "react";
import "./Contact.css";
import web from "../Components/img/web.png";
import botom from "../Components/img/botom.jpg";
import fb from "./img/fb.png";
import link from "./img/link.png";
import twitter from "./img/twiter.png";
import AutoplaySlider from "./AutoplaySlider";
import Navbar from "./Navbar";
import FeedBackSlider from "./FeedBackSlider";
import Footer from "./Footer";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useState } from "react";

function Contact() {
    const form = useRef();
    const [isEmailSent, setIsEmailSent] = useState(false); // State to track email sending status
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_t00swx9",
                "template_r5f0p5g",
                form.current,
                "xd4EFFwVRqkkVe96v"
            )
            .then(
                (result) => {
                    console.log(result.text);
                    console.log("message sent");
                    setIsEmailSent(true);
                    window.location.reload();
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };
    return (
        <>
            <Navbar />
            <br></br>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-7">
                        <h1 className="sec-1-para fw-bold">
                            GET IN TOUCH WITH WEBSQUADS!
                        </h1>
                        <p className="mt-5 fs-5">
                            If you have any question, feel free to reach out to
                            us by<br></br> filling the short form and drop us an
                            email below.<br></br> Our commitment to effective
                            communication<br></br> ensures that we're always
                            just a message away.
                        </p>
                    </div>

                    <div className="col-md-4 parent">
                        <img
                            className=" img-fluide image2 vert-move btom-img"
                            src={botom}
                        />
                        <img className="img-fluide image1 mb-5 " src={web} />
                    </div>
                </div>
            </div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6 col-sm-12 ">
                        {/* <button className='btn1'>View Pricing<i class="btn-icon fa-solid fa-circle-chevron-down"></i></button> */}
                        <button className="btn2 mx-3">
                            <i class="btn-icon me-2 fa-solid fa-phone"></i>About
                            WebSquads
                        </button>
                    </div>
                </div>
            </div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6">
                        <h2 className="contact-Faqs fw-bold mt-5">
                            Frequently <span>Asked Questions</span>
                        </h2>
                        <p className="fs-5 mt-3 contact-para">
                            Need help reaching us? Check out our FAQ section.
                        </p>
                        <section class="container my-5" id="maincontent">
                            <section id="accordion">
                                <div
                                    class="py-3 d-block h-100 w-100 position-relative z-index-1 pr-1 text-secondary border-top"
                                    aria-controls="faq-17"
                                    aria-expanded="false"
                                    data-toggle="collapse"
                                    href="#faq-17"
                                    role="button"
                                >
                                    <div class="position-relative">
                                        <h5>
                                            Can WebSquads help businesses
                                            outside its location?
                                        </h5>
                                        <div class="position-absolute top-0 right-0 h-100 d-flex align-items-center">
                                            <i class="fa fa-plus"></i>
                                        </div>
                                    </div>
                                </div>

                                <div class="collapse" id="faq-17">
                                    <div class="card1 card-body border-0 p-0">
                                        <p className="contact-para">
                                            Yes, we work with clients globally.
                                            Location isn't a barrier. We're
                                            equipped to collaborate effectively
                                            regardless of where you're located.
                                        </p>
                                    </div>
                                </div>
                                <div
                                    class="py-3 d-block h-100 w-100 position-relative z-index-1 pr-1 text-secondary border-top"
                                    aria-controls="faq-18"
                                    aria-expanded="false"
                                    data-toggle="collapse"
                                    href="#faq-18"
                                    role="button"
                                >
                                    <div class="position-relative">
                                        <h5>
                                            What makes WebSquads different from
                                            other digital agencies?
                                        </h5>
                                        <div class="position-absolute top-0 right-0 h-100 d-flex align-items-center">
                                            <i class="fa fa-plus"></i>
                                        </div>
                                    </div>
                                </div>
                                <div class="collapse" id="faq-18">
                                    <div class="card1 card-body border-0 p-0">
                                        <p className="contact-para">
                                            At WebSquads, we blend creative
                                            excellence with efficient processes.
                                            Our personalized approach,
                                            commitment to innovation, and focus
                                            on delivering tangible results set
                                            us apart.
                                        </p>
                                        <p></p>
                                    </div>
                                </div>

                                <div
                                    class="py-3 d-block h-100 w-100 position-relative z-index-1 pr-1 text-secondary border-top"
                                    aria-controls="faq-19"
                                    aria-expanded="false"
                                    data-toggle="collapse"
                                    href="#faq-19"
                                    role="button"
                                >
                                    <div class="position-relative">
                                        <h5>
                                            How can I get in touch with
                                            WebSquads?
                                        </h5>
                                        <div class="position-absolute top-0 right-0 h-100 d-flex align-items-center">
                                            <i class="fa fa-plus"></i>
                                        </div>
                                    </div>
                                </div>
                                <div class="collapse" id="faq-19">
                                    <div class="card1 card-body border-0 p-0">
                                        <p className="contact-para">
                                            You can reach out to us by filling
                                            out the contact form on our
                                            website's "Contact Us" page or by
                                            using the provided contact details
                                            such as email (info@websquads.com)
                                            or phone (+1-123-456-7890).
                                        </p>
                                        <p></p>
                                    </div>
                                </div>
                            </section>
                        </section>
                    </div>
                    <div className="col-md-6">
                        <h2 className="contact-Faqs fw-bold mt-5 mx-5">
                            E-Mail Us!
                        </h2>
                        <form
                            className="mt-5 mx-3"
                            id="contact-form"
                            name="contact-form"
                            ref={form}
                            onSubmit={sendEmail}
                        >
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="md-form mb-0">
                                        <label
                                            htmlFor="name"
                                            className="label-text fw-bold"
                                        >
                                            Full Name
                                        </label>
                                        <input
                                            className="py-2 px-3 input bg-light"
                                            type="text"
                                            placeholder="your name"
                                            name="user_name"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="md-form mb-0">
                                        <label
                                            htmlFor="email"
                                            className="label-text fw-bold"
                                        >
                                            Email address*
                                        </label>
                                        <input
                                            className="py-2 px-3 input bg-light"
                                            type="text"
                                            placeholder="enter email"
                                            name="user_email"
                                            required     
                                        />
                                        <p className="text-danger fs-5 mx-2">
                                            The field is required.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-12">
                                    <div className="md-form mb-0">
                                        <label
                                            htmlFor="subject"
                                            className="label-text fw-bold"
                                        >
                                            Tell us more about your brand
                                        </label>
                                        <textarea
                                            className="w-100 bg-light input"
                                            style={{ height: "125px" }}
                                            name="message"
                                        >
                                            'please share as much details as you
                                            can!'
                                        </textarea>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-6 mt-2">
                                    <h6 className="label-text">
                                        What aspect do you need help with?
                                    </h6>
                                    <select
                                        className="form-select bg-light"
                                        aria-label="Default select example"
                                        name="aspect"
                                    >
                                        <option defaultValue="-please choose an option-">
                                            -please choose an option-
                                        </option>
                                        <option value="Branding">
                                            Branding
                                        </option>
                                        <option value="Marketing">
                                            Marketing
                                        </option>
                                        <option value="Launch process">
                                            Launch process
                                        </option>
                                    </select>
                                </div>
                                <div className="col-md-6 mt-3">
                                    <div className="md-form mb-0">
                                        <label
                                            htmlFor="name"
                                            className="label-text fw-bold"
                                        >
                                            Enter your Phone Number
                                        </label>
                                        <input
                                            className="py-2 px-3 input bg-light"
                                            type="text"
                                            placeholder="#phone"
                                            name="user_phone"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12 mt-5 ">
                                <button
                                    type="submit"
                                    className="btn-submit fs-4 fw-bold text-white p-2"
                                >
                                    Submit
                                </button>
                            </div>
                            {/* <input type="submit" value="Send" /> */}
                        </form>

                        {/* <div className="col-md-12 mt-5 ">
                    <button type="submit" className="btn-submit fs-4 fw-bold text-white p-2">
                        Submit
                    </button>
                </div> */}
                {isEmailSent && (
                <p className="text-success text-center mt-3">Email Sent Successfully</p>
            )}
                    </div>
                </div>
            </div>

            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-4 mt-5">
                        <h3 className="ofc fw-bold  ">OUR OFFICE</h3>
                    </div>
                    <div className="col-md-8 mt-5">
                        <iframe
                            className="custom-map"
                            width="720"
                            height="450"
                            id="gmap_canvas"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3405.1282879300475!2d73.10007157476565!3d31.410591352559145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x392269c2bfd5d8c9%3A0x19055fb0af7fb7ef!2sWebSquads!5e0!3m2!1sen!2s!4v1692859742505!5m2!1sen!2s"
                            frameborder="0"
                            scrolling="no"
                            marginheight="0"
                            marginwidth="0"
                        ></iframe>
                    </div>
                </div>
            </div>

            <div className="container mt-5">
                <div className="row">
                    <div className="social-bg mt-2">
                        <div className="col-md-12 mt-5">
                            <h2 className="mt-5 text-center social-content">
                                Follow <span className="span">Us On </span>
                                Social
                            </h2>
                        </div>
                        <div className="col-md-12 text-center mt-5">
                            <a href="https://www.facebook.com/websquadsservices">
                                <img className="social-icon me-4" src={fb} />
                            </a>
                            <a href="https://www.linkedin.com/company/websquads-services/mycompany/">
                                <img className="social-icon me-4" src={link} />
                            </a>
                            <a href="">
                                <img
                                    className="social-icon me-4"
                                    src={twitter}
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/*  */}
            <div className="container mt-5 border">
                <div className="row">
                    <div className="col-md-12">
                        <h3 className="fs-1">Our Clients!</h3>
                        <AutoplaySlider />
                    </div>
                </div>
            </div>

            {/*  */}
            <div className="bg-image mt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <h6 className=" text-white p-1 rounded bg-para">
                                OUR CLIENTS LOVE US
                            </h6>
                            <h2 className="text-white mt-3 fw-bold">
                                Hear from Our Happy Clients
                            </h2>
                            <p className="text-white mt-3 fs-5">
                                Take a look at the glowing reviews and<br></br>{" "}
                                success stories from some of our<br></br> happy
                                customers to see how<br></br> WebSquads can help
                                your business<br></br> achieve its goals.
                            </p>
                            <button className="btn-1">
                                {" "}
                                <i class="btn-icon me-2 fa-solid fa-phone"></i>
                                Contact us
                            </button>
                        </div>
                        <div className="col-md-8">
                            <FeedBackSlider />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Contact;
