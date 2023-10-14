import React from 'react';
// import Css from '../Components/Website.css';
import './Website.css'
import web from '../Components/img/ppc.png';
import botom from '../Components/img/botom.jpg';
import AutoplaySlider from './AutoplaySlider';
import YourCarousel from '../Components/YourCarousel.js';
import Banner from '../Components/Banner.js'
import FeedBackSlider from '../Components/FeedBackSlider'
import Navbar from './Navbar';
import Footer from './Footer';
import { NavLink } from 'react-router-dom';




function Website() {
    return (
        <>
        <Navbar/>

            <div className='container mt-2'>
                <div className='row'>
                    <div className='col-md-7'>
                        <h1 className='sec-1-para fw-bold mt-4'>Welcome to WebSquad's UI/UX Design page
</h1>
                        <p className='mt-5 fs-5'>Where we believe that digital interactions should be both visually stunning and seamlessly functional. Our UI/UX design services are the bridge between aesthetics and user experience, creating interfaces that not only dazzle the eyes but also enhance engagement. From intuitive user journeys to captivating visuals, we specialize in translating your brand's essence into a digital experience that leaves a lasting impact.
</p>
                    </div>

                    <div className='col-md-4 parent'>
                        <img className=' img-fluide image2 vert-move btom-img' src={botom} />
                        <img className='img-fluide image1 w-100 ' src={web} />

                    </div>
                </div>
            </div>
            <div className='container mt-5'>
                <div className='row'>
                    <div className='col-md-6 col-sm-12 '>
                        {/* <button className='btn1'>View Pricing<i class="btn-icon fa-solid fa-circle-chevron-down"></i></button> */}
                        <NavLink to='/about us'>
                        <button className='btn2 mx-3'><i class="btn-icon me-2 fa-solid fa-phone"></i>About WebSquads</button>
                        </NavLink></div>
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
                            <p className='simple-para  fw-bolder rounded m-auto mt-4'>Custom UI/UX Packages for Your Business</p>
                            <h3 className='fw-bold fs-2 mt-3'>UI/UX Design Excellence within Your Reach
</h3>
                            <p className='mt-3'>At Websquads, we're committed to delivering outstanding UI/UX design solutions that don't<br></br> strain your budget. Our affordable packages cater to businesses of all sizes, ensuring that you can<br></br> access top-tier design expertise without breaking the bank. We understand the importance of<br></br> marrying aesthetics and user experience, and our pricing reflects our dedication to providing<br></br> value-driven services. Experience the magic of captivating design that resonates with your audience,<br></br> all within a budget that suits your needs. With Websquads, exceptional UI/UX design is well within your reach.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container bg-light p-3 packeges'>
                <div className='row'>
                    <div className='col-md-6'>
                        <p className='packeges-p rounded'>Pricing</p>
                        <h3 className='fw-bold '>Transparent UI/UX Design Pricing</h3>
                        <p className='mt-3 packeges-p2'>At Websquads, we believe in transparency in every aspect of our services, including pricing. Our UI/UX design pricing is tailored to accommodate a variety of project scopes and budgets. We offer clear and comprehensive pricing options, ensuring that you know exactly what to expect. Whether you're a startup or an established enterprise, our pricing structure is designed to provide value while maintaining the highest quality of design work. With Websquads, you can confidently invest in UI/UX design knowing that you're getting exceptional results at a fair and transparent price.
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
                            <h2 className='text-center fw-bold p-3 mt-4'>Unveiling the Websquads Edge in <span className='underline'>UI/UX Design</span> Services</h2>
                            <p className='p-3 mx-2 mt-4'>At Websquads, our UI/UX design stands out for its creative flair and strategic precision. Our team crafts not just visuals, but experiences that resonate with users. By understanding your audience, we create designs that captivate, engage, and leave a mark. With Websquads, your UI/UX design is in expert hands that seamlessly blend art and science for impactful digital experiences.</p>
                            <p className='p-3 mx-2 mt-4'>With WebSquads, you don’t need to look and pay for separate experts who can help you fix your page. We are known for helping businesses grow by ensuring that their WordPress and WooCommerce websites bring in actual revenues that increase the value of their businesses, and not merely design an online billboard, passively attracting mere visits and not engagements.</p>
                        </div>

                    </div>
                </div>
            </div>


            <div className='container section-7 mt-5'>
                <div className='row'>
                    <div className='col-md-12 '>
                        <p className='section-7-para rounded mx-auto text-center fw-bold'>Customized Strategies and Results-Driven Solutions</p>
                        <h1 className='fw-bold text-center mt-4'>Why WebSquads?</h1>
                        <p className='text-center mt-3'>Our Expertise and Commitment to Your Success Sets Us Apart</p>

                    </div>
                </div>
                <div className='section-7-c'>
                </div>
            </div>
            <div className='sec-8'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-md-12'>
                        <p className='text-dark mx-auto mt-5 fw-bold sec-8-para rounded'>See How We've Helped Businesses Succeed Online</p>
                        <h2 className='text-white text-center mt-4'>Our Website and Development Projects</h2>
                        <p className='text-white text-center mt-4'>At WebSquads, we are proud of the websites and development projects we<br/>
                         have created for our clients. From e-commerce sites to custom CMS builds,<br/>
                          our team has the expertise and creativity to develop unique solutions that<br/>
                           meet our clients' needs. Browse through our portfolio to see examples of our<br/>
                            work and learn more about how we can help your business succeed online.</p>
                            <p className='text-white text-center mt-4'>Ready to take your website to the next level? Contact us today to schedule a<br/> 
                            consultation with one of our experts and learn how we can help you achieve<br/>
                             your online goals.</p>
                             <h6 className='text-white text-center fw-bold mt-4'>Book a Free Consulation Today  <span>&gt;</span></h6>
                  <YourCarousel/>


                    </div>


                </div>

             </div>
            </div>

            <div className='mt-5'>
            <Banner/>
            </div>
           
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

export default Website
