import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './FeedBackSlider.css';

import {BsPersonCircle} from 'react-icons/bs';
import {FaStar} from 'react-icons/fa';
import {FaRegStar} from 'react-icons/fa';

const items = [
    <div className="item feedback-card" data-value="1">
        <div className='card2'>
            <div className='card-icon'>
                <BsPersonCircle/>
            </div>
            <div className='card-name2'>
                <h5>David Kim</h5>
            </div>
            <div className='card-comment2'>
                <p>
                Since launching the website, the company saw a 120% increase in their
                 traffic and their reach has doubled since implementing the
                 WebSquads team's recommendations.
                </p>
            </div>
            <div className='card-rating'>
                <ul>
                    <li><FaStar/></li>
                    <li><FaStar/></li>
                    <li><FaStar/></li>
                    <li><FaStar/></li>
                    <li><FaRegStar/></li>
                </ul>
            </div>
        </div>
    </div>,
    <div className="item" data-value="2">
        <div className='card2'>
            <div className='card-icon'>
                <BsPersonCircle/>
            </div>
            <div className='card-name2'>
                <h5>David Kim</h5>
            </div>
            <div className='card-comment2'>
                <p>
                Since launching the website, the company saw a 120% increase in their traffic and their reach has doubled since implementing the WebSquads team's recommendations. 
                </p>
            </div>
            <div className='card-rating'>
                <ul>
                    <li><FaStar/></li>
                    <li><FaStar/></li>
                    <li><FaStar/></li>
                    <li><FaStar/></li>
                    <li><FaRegStar/></li>
                </ul>
            </div>
        </div>
    </div>,
    <div className="item" data-value="3">
        <div className='card2'>
            <div className='card-icon'>
                <BsPersonCircle/>
            </div>
            <div className='card-name2'>
                <h5>David Kim</h5>
            </div>
            <div className='card-comment2'>
                <p>
                Since launching the website, the company saw a 120% increase in their traffic and their reach has doubled since implementing the WebSquads team's recommendations. 
                </p>
            </div>
            <div className='card-rating'>
                <ul>
                    <li><FaStar/></li>
                    <li><FaStar/></li>
                    <li><FaStar/></li>
                    <li><FaStar/></li>
                    <li><FaRegStar/></li>
                </ul>
            </div>
        </div>
    </div>,
    <div className="item" data-value="4">
        <div className='card2'>
            <div className='card-icon'>
                <BsPersonCircle/>
            </div>
            <div className='card-name2'>
                <h5>David Kim</h5>
            </div>
            <div className='card-comment2'>
                <p>
                Since launching the website, the company saw a 120% increase in their traffic and their reach has doubled since implementing the WebSquads team's recommendations. 
                </p>
            </div>
            <div className='card-rating'>
                <ul>
                    <li><FaStar/></li>
                    <li><FaStar/></li>
                    <li><FaStar/></li>
                    <li><FaStar/></li>
                    <li><FaRegStar/></li>
                </ul>
            </div>
        </div>
    </div>,
    <div className="item" data-value="5">
        <div className='card2'>
            <div className='card-icon'>
                <BsPersonCircle/>
            </div>
            <div className='card-name2'>
                <h5>David Kim</h5>
            </div>
            <div className='card-comment2'>
                <p>
                    Since launching the website, the company saw a 120% increase in their traffic and their reach has doubled since implementing the WebSquads team's recommendations. 
                </p>
            </div>
            <div className='card-rating'>
                <ul>
                    <li><FaStar/></li>
                    <li><FaStar/></li>
                    <li><FaStar/></li>
                    <li><FaStar/></li>
                    <li><FaRegStar/></li>
                </ul>
            </div>
        </div>
    </div>,
];

const FeedBackSlider = () => (
    <AliceCarousel
        mouseTracking
        items={items}
        controlsStrategy="alternate"
        autoPlay
        disableButtonsControls
        infinite
        autoPlayInterval={2000}
    />
);

export default FeedBackSlider;