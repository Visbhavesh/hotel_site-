import React, { useEffect, useState } from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import RoomsContainer from "../components/RoomsContainer";
import Data from "/Users/bhavesh/Downloads/Hotel-Booking-main/public/db.json";

const Hotel = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(
      "https://dev.foodkit.io/api/v5/storefront/content/tenants/{tenant}/branch-list"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPosts(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <>
      {/* <Hero hero="roomsHero">
        <Banner title="our rooms">
          <Link to="/" className="btn-primary">
            return home
          </Link>
        </Banner>
      </Hero> */}
      <div className="posts-container">
        {posts.map((post) => (
          <div className="post-card" key={post.id}>
            <img
              src={post.logo_images[0].src.replace(/\\/g, "")}
              alt={post.locales.en.name}
              className="post-logo"
            />
            <h2 className="post-title">{post.locales.en.name}</h2>
            <p className="post-description">{post.locales.en.description}</p>
            <p className="post-address">
              {post.locales.en.address1}, {post.locales.en.suburb},{" "}
              {post.locales.en.city}, {post.locales.en.postcode},{" "}
              {post.locales.en.country}
            </p>
            <div className="button">
              <div className="delete-btn">Delete</div>
            </div>
          </div>
        ))}
      </div>
      
    </>
  );
};

export default Hotel;
