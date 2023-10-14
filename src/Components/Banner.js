import React from 'react'
// import Css from '../  Components/Banner.css'
import css from '../Components/Banner.css'
import socials from '../Components/img/social1.webp'
import circle from '../Components/img/Circle.jpeg'
function Banner() {
  return (
    <>
    <div className='container custom-banner'>
    <div className='row'>
        <div className='col-lg-6'>
            <h2 className='fw-bold'> HOW DOES THIS HELP YOUR BUSINESS?</h2>
            <div className='shadow  mt-5 rounded-3 px-3 py-4 w-100 '>
                
                <p className='mx-3'>Choosing WebSquads for your web design and digital needs is an investment that pays dividends for your business. Our expertly crafted solutions elevate your online presence, engaging your audience and driving conversions. A thoughtfully designed website not only leaves a lasting impression but also establishes credibility, attracting potential customers and fostering trust. With user-friendly interfaces and responsive designs, your website becomes accessible to a wider audience, increasing your reach and potential for growth. Our tailored strategies align with your unique goals, ensuring that every effort is aligned with your business objectives. By partnering with WebSquads, you're equipping your business with the tools to stand out, succeed, and flourish in the digital realm.
</p>

            </div>
        </div>
        <div className='col-lg-6 mt-5'>
        <div className='Hammad'>
                <img src={circle} className='Hammad2 rotate'></img>
                <img className='Hammad1' src={socials}></img>
            </div>
        </div>
    </div>
   </div>
    </>
  )
}

export default Banner