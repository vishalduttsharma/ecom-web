import React from 'react'
import About from '../component/About'
import Features from '../component/Features'
import Testimonials from '../component/Testimonials'
import Product from '../component/Product'
import { Link } from 'react-router-dom'

export default function Homepage() {
  return (
    <>
        <section id="hero" className="hero section">

      <div className="container" data-aos="fade-up" data-aos-delay="100">

        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="hero-content">
              <h1 data-aos="fade-right" data-aos-delay="300">
              <span className="highlight"> Timeless Heritage </span> Modern Style -Discover Quality YOUcan Trust at Heritage Ally
              </h1>

              <p className="hero-description" data-aos="fade-right" data-aos-delay="400">
                Explore a wide range of premium products designed for quality and style. Enjoy seamless shopping, secure payments, fast delivery, and exclusive deals that bring value and satisfaction to every purchase you make.
  </p>

              <div className="hero-stats mb-4" data-aos="fade-right" data-aos-delay="500">
                <div className="stat-item">
                  <h3><span data-purecounter-start="0" data-purecounter-end="15" data-purecounter-duration="2"
                      className="purecounter  bi bi-check"></span></h3>
                  <p>100% Genuine products</p>
                </div>
                <div className="stat-item">
                  <h3><span data-purecounter-start="0" data-purecounter-end="5000" data-purecounter-duration="2"
                      className="purecounter bi bi-headphones"></span></h3>
                  <p>24/7 Customer support</p>
                </div>
                <div className="stat-item">
                  <h3><span data-purecounter-start="0" data-purecounter-end="50" data-purecounter-duration="2"
                      className="purecounter bi bi-truck"></span></h3>
                  <p>Fast Delivery</p>
                </div>
              </div>

              <div className="hero-actions" data-aos="fade-right" data-aos-delay="600">
                <Link to="/shop" className="btn btn-primary btn-sm">Shop Now</Link>
                <Link to="/feature" className="btn btn-primary btn-sm">Features</Link>
                <Link to="/contactus" className="btn btn-primary btn-sm">Have Any Query</Link>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="hero-visual" data-aos="fade-left" data-aos-delay="400">
              <div className="main-image">
                <img src="assets\img\images\1.jpg" alt="Modern Healthcare Facility" className="img-fluid"/>
                <div className="floating-card appointment-card">
                  <div className="card-icon">
                    <i className="bi bi-bag-heart-fill"></i>
                  </div>
                  <div className="card-content">
                    <h6>Sales is Live</h6>
                    <p>Grab up to 90% Discount</p>
                    <small>On Latest Product</small>
                  </div>
                </div>
                <div className="floating-card rating-card">
                  <div className="card-content">
                    <div className="rating-stars">
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                    </div>
                    <h6>4.9/5</h6>
                    <small>10,000+ Reviews</small>
                  </div>
                </div>
              </div>
              <div className="background-elements">
                <div className="element element-1"></div>
                <div className="element element-2"></div>
                <div className="element element-3"></div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
    <About/>
    <Features/>
    <Product/>
    <Testimonials/>
    {/* <!-- /Hero Section --> */}
    </>
  )
}
