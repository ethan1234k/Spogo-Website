import React from 'react';
import './Blog.css';

function Blog({ image, title, personImage, name, date, paragraphText }) {
  return (
    <div className="blog_container">
      <img className="blog_image" src={image} alt="Blog Image" />
      <div className="no_image_container">
        <h1 className="title">{title}</h1>
        <div className="blog_writer_container">
          <img className="blog_writer" src={personImage} alt="Writer Image" />
          <p className="description_text">
            by <span>{name}</span> on {date}
          </p>
          {/* Text by Picture */}
        </div>
        <p className="paragraph_text">{paragraphText}</p>
        <p className="read_more_text">Read more...</p>
      </div>
    </div>
  );
}

export default Blog;
