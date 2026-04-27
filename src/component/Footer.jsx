import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
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
    <div>
      <footer id="footer" className="footer-16 footer position-relative bg-dark text-light">

    <div className="container">

      <div className="footer-main" data-aos="fade-up" data-aos-delay="100">
        <div className="row align-items-start">

          <div className="col-lg-4">
            <div className="brand-section">
              <Link to="/" className="logo d-flex align-items-center mb-4">
                <span className="sitename text-light">{SettingData.sitename}</span>
              </Link>
              <p className="text-light">Heritage Ally blends timeless traditions with modern lifestyle, creating meaningful connections between culture, people, and everyday experiences.
</p>
              <div className="contact-info mt-5">
                <div className="contact-item">
                   <Link to={SettingData.map1} target='_blank'>
                  <i className=" text-light  bi bi-geo-alt"></i>
                  <span className='text-light'>{SettingData.address}</span>
                   </Link>
                </div>
              
                  <div className="contact-item">
                   <Link to={`mailto:${SettingData.email}`} target='_blank'>
                  <i className=" text-light  bi bi-envelope"></i>
                  <span className='text-light'>{SettingData.email}</span>
                   </Link>
                </div>
              
                  <div className="contact-item">
                   <Link to={`tel:${SettingData.phone}`} target='_blank'>
                  <i className=" text-light  bi bi-phone"></i>
                  <span className='text-light'>{SettingData.phone}</span>
                   </Link>
                </div>
              
                  <div className="contact-item">
                   <Link to={`https://wa.me/${SettingData.whatsapp}`} target='_blank'>
                  <i className=" text-light  bi bi-whatsapp"></i>
                  <span className='text-light'>{SettingData.whatsapp}</span>
                   </Link>
                </div>
              
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="footer-nav-wrapper">
              <div className="row">
                <div className="col-md-3 col-12 mt-3">
                  <div className="nav-column ">
                    <h6 className='text-light '>Quick links</h6>
                    <nav className="footer-nav">
                      <Link to="/home" className='text-light '>Home</Link>
                      <Link to="/about" className='text-light '>About</Link>
                      <Link to="/shop" className='text-light '>Shop</Link>
                      <Link to="/features" className='text-light '>Features</Link>
                      <Link to="/faq" className='text-light '>Faq</Link>
                    </nav>
                  </div>
                </div>
<div className="col-md-3 col-12 mt-3">
                  <div className="nav-column ">
                    <h6 className='text-light '>Important links</h6>
                    <nav className="footer-nav">
                      <Link to="/testimonials" className='text-light '>Testimonials</Link>
                      <Link to="/ContactUs" className='text-light '>ContactUs</Link>
                      <Link to="privacy-policy" className='text-light '>Privacy-policy</Link>
                      <Link to="/term and conditions" className='text-light '>Term and conditions</Link>
                    </nav>
                  </div>
                </div>
                <div className="col-md-6 col-12 ">
                  <div class  Name="nav-column">
                    <h6 className='text-light my-3'>Subscribe our Newsletter Service </h6>
                    <p>We are dedicated to providing high-quality products with a seamless shopping experience. Our mission is to make online shopping simple, fast, and reliable for everyone. With a focus on customer satisfaction, we ensure the best quality, secure payments, and timely delivery.</p>
                    <form>
                      <div className="btn-group w-100">
                      <input type='email' name='email' placeholder='Enter your Email Address to subscribe our Newsletter Service' className='form-control rounded-0 rounded-left'/>
                      <button className='btn btn-dark border outlist-light'>Subscribe</button>
                      </div>
                    </form>
                  </div>
                  <div className="mt-3">
     <div className="social-links  d-md-flex align-items-center">
            <Link to={SettingData.twitter} target='_blank' className="text-light me-3"><i className="  bi bi-twitter-x"></i></Link>
            <Link to={SettingData.facebook} target='_blank' className="text-light me-3"><i className="   bi bi-facebook"></i></Link>
            <Link to={SettingData.instagram} target='_blank' className="text-light me-3"><i className="  bi bi-instagram"></i></Link>
            <Link to={SettingData.linkedin} target='_blank' className="text-light me-3"><i className="   bi bi-linkedin"></i></Link>
            <Link to={SettingData.youtube} target='_blank' className="text-light me-3"><i className="  bi bi-youtube"></i></Link>
          </div> 
</div>
                </div>            

              </div>
            </div>
          </div>

        </div>
      </div>

    </div>



    <div className="footer-bottom border-top" style={{marginTop:-80}}>
      <div className="container">
        <div className="bottom-content" data-aos="fade-up" data-aos-delay="300">
          <div className="row align-items-center">

            <div className="col-lg-6">
              <div className="copyright">
                <p className='text-light'>© <span className="sitename text-light ">{SettingData.sitename}</span>. All rights reserved.</p>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="legal-links">
                  <Link to="/home" className='text-light '>Home</Link>
                      <Link to="/about" className='text-light '>About</Link>
                      <Link to="/shop" className='text-light '>Shop</Link>
                      <Link to="/features" className='text-light '>Features</Link>
                     <Link to="privacy-policy" className='text-light '>Privacy-policy</Link>
                      <Link to="/term and conditions" className='text-light '>Term and conditions</Link>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
    </div>
  )
}
