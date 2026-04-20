import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {

  let [SettingData,SetSettingData] = useState({
sitename:import.meta.env.VITE_APP_SITE_NAME,
address:import.meta.env.VITE_APP_ADDRESS,
email:import.meta.env.VITE_APP_EMAIL,
phone:import.meta.env.VITE_APP_PHONE,
whatsapp:import.meta.env.VITE_APP_WHATSAPP,
map1:import.meta.env.VITE_APP_MAP1,
map2:import.meta.env.VITE_APP_MAP2,
facebook:import.meta.env.VITE_APP_FACEBOOK,
twitter:import.meta.env.VITE_APP_TWITTER,
linkedin:import.meta.env.VITE_APP_LINKEDIN,
instagram:import.meta.env.VITE_APP_INSTAGRAM,
youtube:import.meta.env.VITE_APP_YOUTUBE
  })
  return (
   <>
   <header id="header" className="header fixed-top">
    <div className="topbar d-flex align-items-center dark-background">
      <div className="container d-flex justify-content-center justify-content-md-between">
        <div className="contact-info d-flex align-items-center">


          <i className=" ms-2  bi bi-geo-alt d-flex align-items-center">
                        <Link to={`${SettingData.map1}`} target='_blank'>{SettingData.address}</Link>
              </i>

  
          <i className=" ms-2  bi bi-envelope d-flex align-items-center">
                        <Link to={`mailto:${SettingData.email}`} target='_blank'>{SettingData.email}</Link>
              </i>  
          <i className=" ms-2  bi bi-telephone d-flex align-items-center">
                        <Link to={`tel:${SettingData.phone}`} target='_blank'>{SettingData.phone}</Link>
              </i>  
          <i className=" ms-2  bi bi-whatsapp d-flex align-items-center">
                        <Link to={`https://wa.me/${SettingData.whatsapp}`} target='_blank'>{SettingData.whatsapp}</Link>
              </i>  
                  </div>
        <div className="social-links d-none d-md-flex align-items-center">
          <Link to={SettingData.twitter} target='_blank' className="twitter"><i className=" ms-2  bi bi-twitter-x"></i></Link>
          <Link to={SettingData.facebook} target='_blank' className="facebook"><i className=" ms-2  bi bi-facebook"></i></Link>
          <Link to={SettingData.instagram} target='_blank' className="instagram"><i className=" ms-2  bi bi-instagram"></i></Link>
          <Link to={SettingData.linkedin} target='_blank' className="linkedin"><i className=" ms-2  bi bi-linkedin"></i></Link>
          <Link to={SettingData.youtube} target='_blank' className="linkedin"><i className=" ms-2  bi bi-youtube"></i></Link>
        </div>
      </div>
    </div>
    {/* <!-- End Top Bar --> */}

    <div className="branding d-flex align-items-cente">

      <div className="container position-relative d-flex align-items-center justify-content-between">
        <Link to="index.html" className="logo d-flex align-items-center">
          {/* <!-- Uncomment the line below if you also wish to use an image logo --> */}
         <img src="assets/img/logo.webp" alt=""/> 
          <h1 className="sitename">{SettingData.sitename}</h1>
        </Link>
        <nav id="navmenu" className="navmenu">
          <ul>
            <li><Link to="index.html" className="active">Home</Link></li>
            <li><Link to="about.html">About</Link></li>
            <li><Link to="departments.html">Departments</Link></li>
            <li><Link to="services.html">Services</Link></li>
            <li><Link to="doctors.html">Doctors</Link></li>
            <li className="dropdown"><Link to="#"><span>More Pages</span> <i className=" ms-2  bi bi-chevron-down toggle-dropdown"></i></Link>
            <ul>
              <li><Link to="department-details.html">Department Details</Link></li>
              <li><Link to="service-details.html">Service Details</Link></li>
              <li><Link to="appointment.html">Appointment</Link></li>
              <li><Link to="testimonials.html">Testimonials</Link></li>
              <li><Link to="faq.html">Frequently Asked Questions</Link></li>
              <li><Link to="gallery.html">Gallery</Link></li>
              <li><Link to="terms.html">Terms </Link></li>
              <li><Link to="privacy.html">Privacy</Link></li>
              <li><Link to="404.html">404</Link></li>
            </ul>
            </li>
            <li className="dropdown"><Link to="#"><span>Dropdown</span> <i className=" ms-2  bi bi-chevron-down toggle-dropdown"></i></Link>
              <ul>
                <li><Link to="#">Dropdown 1</Link></li>
                <li className="dropdown"><Link to="#"><span>Deep Dropdown</span> <i className=" ms-2  bi bi-chevron-down toggle-dropdown"></i></Link>
                  <ul>
                    <li><Link to="#">Deep Dropdown 1</Link></li>
                    <li><Link to="#">Deep Dropdown 2</Link></li>
                    <li><Link to="#">Deep Dropdown 3</Link></li>
                    <li><Link to="#">Deep Dropdown 4</Link></li>
                    <li><Link to="#">Deep Dropdown 5</Link></li>
                  </ul>
                </li>
                <li><Link to="#">Dropdown 2</Link></li>
                <li><Link to="#">Dropdown 3</Link></li>
                <li><Link to="#">Dropdown 4</Link></li>
              </ul>
            </li>
            <li><Link to="contact.html">Contact</Link></li>
          </ul>
          <i className="mobile-nav-toggle d-xl-none  ms-2  bi bi-list"></i>
        </nav>

      </div>

    </div>

  </header>

   </>
  )
}
