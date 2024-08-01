import React from 'react';
import samosa from '../assets/samosa.jpg';
import food1 from '../assets/food1.jpg';
import food2 from '../assets/food2.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import styles from './Carousel.module.css';

export default function Carousel() {
  return (
    <div>
      <div id="carouselExample" className={`carousel slide ${styles.carouselContainer}`} data-bs-ride="carousel">
      <div className="carousel-caption d-none d-md-block" style={{zIndex: "10"}}>
      <form className="form-inline">
    <input className="form-control mr-sm-2 d-inline" type="search" placeholder="Search" aria-label="Search"/>
    <button className="btn btn-outline-success text-white bg-success d-inline " type="submit">Search</button>
  </form>
      </div>
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100 h-10" src={food1} alt="Food 1" style={{filter:"brightness(70%)"}} />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100 h-10" src={food2} alt="Food 2" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100 h-10" src={samosa} alt="Samosa" />
          </div>
        </div>
      </div>
    </div>
  );
}
