import React from 'react';
import { Link } from 'react-router-dom';
import '../css/NoDataFound.css';

function NoDataFound() {
  return (
    <div className="no-data-container">
        <img src="/No Data Found.jpg" alt="Empty playlist" className="no-data-image" />

      <p className="no-data-message">
        Oops! It seems your playlist is empty. Let's fill it up with some amazing videos.
        <br />
        <Link to="/" className="home-link">Take me Home</Link>
      </p>
    </div>
  );
}

export default NoDataFound;
