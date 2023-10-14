import React from "react";
import web from '../Components/img/about-1.png';
import botom from '../Components/img/botom1.jpg';
import img1 from "../Components/img/about.jpg";
import branding from "./img/branding-img.jpg";
import about from "./img/img1.jpg";
import mission from './img/mission1.png'
import "./About.css";
import Navbar from "./Navbar";
import FeedBackSlider from "./FeedBackSlider";
import AutoplaySlider from "./AutoplaySlider";
import Footer from "./Footer";

const About = () => {
  return (
    <>
      <Navbar />
      <div className='container mt-5'>
                <div className='row'>
                    <div className='col-md-7'>
                        <h6 className='sec-1-para fw-bold mt-4'>Welcome to <span className="underline">WebSquads</span></h6>
                        <p className='mt-5 fs-5'>Where imaginations meet reality. We have a /are a legendary team of creative minds and tech-savvy professionals providing top-rated
                         web development, branding and digital marketing solutions. 
                         Whether you're a small business, a startup, or just someone with a big idea, we're your go-to team for all things web and digital and helps you to rank #1 on search engine.
                        </p>
                    </div>

                    <div className='col-md-4 parent'>
                        <img className=' img-fluide image2 vert-move btom-img' src={botom} />
                        <img className='img-fluide image1 w-100 ' src={web} />

                    </div>
                </div>
            </div>
            <br></br>
            <br></br>
            <div className="about-bg">
         <div className="container mt-5">
          <div className="row">
            <div className="col-md-6">
              <div className="about-card mt-5">
                <h2 className="text-center fw-bold"><span className="underline1">Why Choose</span> WebSquads?</h2>
                <p className="text-center crad-para mt-5" >WebSquads is a unified communications platform that<br></br> empowers business owners and promotes business growth<br></br>
                through services that strengthen brand identity, and<br></br> sustainably promote online presence to increase<br></br> engagement. We offer services to help small business<br></br> enterprises from branding, website development, to digital<br></br> marketing—and everything else digital in between.<br></br>
                <br></br>
                No need to waste time and money on different agencies<br></br> that inclusively focus on various aspects of your business<br></br> because at WebSquads, we’ve got everything you need—<br></br> and so much more.<br></br><br></br>
                <br></br>Your success is our motivation, and your digital dreams<br></br> are the driving force behind everything we do. 

                 </p>
              </div>
            </div>
            <div className="col-md-6">
              <img className="img-fluid about-IMG mt-5" src={about}/>
            </div>
          </div>
         </div>
         </div>
      <br></br>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img className="img-fluid" src={mission}/>
          </div>
          <div className="col-md-6">
            <h1 className='fw-bold mt-4'>Our Mission</h1>
            <p className="fs-5">Our mission is to provide our client what they need! We are a<br></br> dynamic team of creative people.<br></br></p>
            <p className="fs-5">No need to waste time and money on different agencies that inclusively focus on various aspects of your business because at WebSquads, we’ve got everything you need—and so much more.</p><br></br>
            <p className="fs-5">WebSquads houses professionals who will closely work with you as you effectively, efficiently, and sustainably race towards achieving your company’s growth, at a reasonable cost for your budding venture. So it’s worry-free, hassle-free, and affordable!</p>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-4 aboutcard1"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.8)),url(${img1})`,
              backgroundSize: "cover",              
            }}
            
          >
            <h1 className="display-5 aboutheading fw-bold text-white">
            Expertise that Elevates
            </h1>
            <p className="lead text-white abouttext">
            The skilled professionals of WebSquads team in web development, digital marketing and design, websquads bring a wealth of expertise to the table.Our extensive skills ensures that your digital projects are executed with accuracy and flourish.

            </p>
          </div>
          <div className="col-md-4 middlecard"
            style={{
              backgroundColor: "white",
            }}
          >
            <p className="fw-bold text center aboutmiddlehaeding">YOUR PARTNER IN SUCCESS</p>
            <h1 className="display-5 aboutheading  fw-bold text-black">
              Why <u className="underline">WebSquads</u>?
            </h1>
            <p className="lead text-black abouttext">
            At WebSquads, we acknowledged that every business is unique. Our commitment to provide personalised solutions means that your projects are custom-made to line-up perfectly with your goals,brand identity and target audience,ensuring maximum impact on your digital success.

            </p>
          </div>
          <div className="col-md-4 aboutcard1">
            <h1 className="display-5 aboutheading fw-bold text-dark">
            Collaborative Partnership:

            </h1>
            <p className="lead text-dark abouttext">
            At websquads, we believe in promoting collaborative relationships. We look at ourselves as an extension of your team , working closely with you to understand your vision, incorporate your feedback,and create solutions that sounds with your brand and values.

            </p>
          </div>
          
          <div className="col-md-4 aboutcard2"
            style={{
              backgroundColor: "white",
            }}
          >
            <h1 className="display-5 aboutheading fw-bold text-black">
            Efficiency in Action:

            </h1>
            <p className="lead text-black abouttext">
            Time is the precious essence and we value yours. WebSquads prouds itself on efficent project execution without compromising on quality. We work gently to meet deadlines and make sure that your digital  initiatives are launched promptly.

            </p>
          </div>
          <div className="col-md-4"></div>
          <div className="col-md-4 aboutcard1"
            style={{
              backgroundImage: ` linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.8)),url(${img1})`,
              backgroundSize: "cover",
            }}
          >
            <h1 className="display-5 aboutheading fw-bold text-white">
            Innovation at the Core:

            </h1>
            <p className="lead text-white abouttext">
            The digital landscape is ever-evolving, and so are we. WebSquads stays at the forefront of industry trends, incorporating the latest technologies and strategies into our work. Our commitment to innovation means that your projects are not only current but future-proofed. 

            </p>
          </div>
          <div className="col-md-4 aboutcard1"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.8)), url(${img1})`,
              backgroundSize: "cover",
              backgroundColor: "#128084",
            }}
          >
            <h1 className="display-5 aboutheading fw-bold text-white">
            Tailored Solutions, Every Time: 
            </h1>
            <p className="lead text-white abouttext">
            At WebSquads, we acknowledged that every business is unique. Our commitment to provide personalised solutions means that your projects are custom-made to line-up perfectly with your goals,brand identity and target audience,ensuring maximum impact on your digital success.

            </p>
          </div>
          <div className="col-md-4"></div>
          <div className="col-md-4 aboutcard1"
            style={{
             
              backgroundColor: "white",
            }}
          >
            <h6 className="display-5 aboutheading fw-bold text-dark">
            Proven Track Record of Success:

            </h6>
            <p className="lead text-dark abouttext">
            With a proven history of delivering results, WebSquads has helped numerous businesses achieve their digital objectives. Our portfolio speaks for itself, showcasing a diverse range of successful projects that have driven growth and engagement.

            </p>
          </div>

        </div>
      </div>
     <br></br>
     <div className='container my-5'>
                <div className='row'>
                    <div className='col-md-12 col-sm-12'>
                        <AutoplaySlider />
                    </div>
                </div>
            </div>
     <div className='background-img mt-5'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-4'>
                <h6 className=' text-white p-1 rounded bg-para'>OUR CLIENTS LOVE US</h6>
                 <h2 className='text-white mt-3 fw-bold'>Hear from Our Happy Clients</h2>
                 <p className='text-white mt-3 fs-6'>Take a look at the glowing reviews and success stories from some of our happy customers to see how WebSquads can help your business achieve its goals.</p>
                 <button className='custom-btn'> <i class="btn-icon me-2 fa-solid fa-phone"></i>Contact us</button>
              </div>
              <div className='col-md-8'>
              <FeedBackSlider/>
              </div>
            </div>
          </div>
        </div>

        <Footer/>
       
    </>
  );
};

export default About;
