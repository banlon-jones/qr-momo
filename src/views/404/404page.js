import React from 'react';
import image from '../../images/404-pages.jpg';

function NotFound() {
  return (
    <div className="text-center mt-5 pt-5">
      <div>
        <img className="img-fluid" src={image} alt="page not found" />
        <h3> Page Not Found </h3>
        <p> This page you are looking for does not exist </p>
        <div>
          <a href="/" className="btn btn-primary"> Go to Home </a>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
