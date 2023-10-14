import React, { useState } from "react";
import "./Blog.css";
import { Link } from "react-router-dom";
import { AiOutlineClockCircle } from "react-icons/ai";
import img1 from "../Components/img/blog-1.webp";
import img2 from "./img/blog-2.webp";
import img3 from "./img/blog-3.webp";
import img4 from "./img/blog-1.webp";
import { FaHeart } from "react-icons/fa";
import { FcGlobe } from "react-icons/fc";
import Navbar from "./Navbar";
import Footer from "./Footer";
// import page1 from "./BlogDetail";

const cardData = [
  {
    id: 1,
    image: img1,
    heading:
      "Budget breakdown and the reality: How much do the web designers charge",
    paragraph:
      "Are you a business owner or entrepreneur looking to create a website for your brand? Or perhaps you’re a web designer yourself, trying to figure out how much to charge for your services. Whatever the case may be, understanding web..      ",
    date: "2023-08-11",
    ids: "",
  },
  {
    id: 2,
    image: img2,
    heading:
      "Budget breakdown and the reality: How much do the web designers charge",
    paragraph:
      "Are you a business owner or entrepreneur looking to create a website for your brand? Or perhaps you’re a web designer yourself, trying to figure out how much to charge for your services. Whatever the case may be, understanding web...",
    date: "2023-08-12",
  },
  {
    id: 2,
    image: img3,
    heading:
      "Budget breakdown and the reality: How much do the web designers charge",
    paragraph:
      "Are you a business owner or entrepreneur looking to create a website for your brand? Or perhaps you’re a web designer yourself, trying to figure out how much to charge for your services. Whatever the case may be, understanding web...",
    date: "2023-08-12",
  },
  {
    id: 2,
    image: img4,
    heading:
      "Budget breakdown and the reality: How much do the web designers charge",
    paragraph:
      "Are you a business owner or entrepreneur looking to create a website for your brand? Or perhaps you’re a web designer yourself, trying to figure out how much to charge for your services. Whatever the case may be, understanding web...",
    date: "2023-08-12",
  },
];

const Blog = () => {
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);

  const handleLike = (id) => {
    setLikes((prevLikes) => ({
      ...prevLikes,
      [id]: (prevLikes[id] || 0) + 1,
    }));
  };

  return (
    <>
    <Navbar/>
      <div className="Blog">
        <div className="Blogcard-container">
          {cardData.map((card, index) => (
            <div className="Blogcard" key={card.id}>
              <div className="image-container">
                <img src={card.image} alt={`Card ${card.id}`} />

                <div
                  className={`like-icon ${likes[card.id] ? "liked" : ""}`}
                  onClick={() => handleLike(card.id)}
                >
                  <FaHeart />
                  <FcGlobe className="globe" />
                </div>
                <div className={`like-count ${likes[card.id] ? "liked" : ""}`}>
                  {likes[card.id] || ""}
                </div>
              </div>

              <button>Button</button>
              <h1>{card.heading}</h1>
              <p>{card.paragraph}</p>
              <div className="Blogcard-footer">
                <div className="date">
                  <AiOutlineClockCircle />
                  {card.date}
                </div>
                {/* <div className="read-more">Read More
                </div> */}
                <a href="../blogdetail.js"> 
                <button className="read-more">read more</button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Blog;
