import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  let [showMenu,setshowMenu]=useState(false)
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
   <header id="header" className={`header fixed-top ${ showMenu? 'mobile-nav-active':''}`}>
    <div className="topbar d-flex align-items-center dark-background">
      <div className="container d-flex justify-content-center justify-content-md-between">
        <div className="contact-info d-flex align-items-center">


          
                        <Link to={`${SettingData.map1}`} target='_blank'  className='text-light d-flex me-2'>
                        <i className=" ms-1  bi bi-geo-alt me-2"></i>
                        <span className='d-none d-xl-block'>{SettingData.address}</span>
                        </Link>              
                        <Link to={`mailto:${SettingData.email}`} target='_blank'  className='text-light d-flex me-2'>
                        <i className=" ms-1  bi bi-envelope me-2"></i>
                        <span className='d-none d-xl-block'>{SettingData.email}</span>
                        </Link>              
                        <Link to={`tel:${SettingData.phone}`} target='_blank'  className='text-light d-flex me-2'>
                        <i className=" ms-1  bi bi-telephone me-2"></i>
                        <span className='d-none d-xl-block'>{SettingData.phone}</span>
                        </Link>                     
                        <Link to={`https://wa.me/${SettingData.whatsapp}`} target='_blank'  className='text-light d-flex me-2'>
                        <i className=" ms-1 bi bi-whatsapp me-2"></i>
                        <span className='d-none d-xl-block'>{SettingData.whatsapp}</span>
                        </Link>
                  </div>
        <div className="social-links  d-md-flex align-items-center">
          <Link to={SettingData.twitter} target='_blank' className="text-light"><i className="  bi bi-twitter-x"></i></Link>
          <Link to={SettingData.facebook} target='_blank' className="text-light"><i className="   bi bi-facebook"></i></Link>
          <Link to={SettingData.instagram} target='_blank' className="text-light"><i className="  bi bi-instagram"></i></Link>
          <Link to={SettingData.linkedin} target='_blank' className="text-light"><i className="   bi bi-linkedin"></i></Link>
          <Link to={SettingData.youtube} target='_blank' className="text-light"><i className="  bi bi-youtube"></i></Link>
        </div> 
      </div>
    </div>
    {/* <!-- End Top Bar --> */}

    <div className="branding d-flex align-items-cente">

      <div className="container position-relative d-flex align-items-center justify-content-between">
        <Link to="/" className="logo d-flex align-items-center">
          {/* <!-- Uncomment the line below if you also wish to use an image logo --> */}
          <h1 className="sitename">{SettingData.sitename}</h1>
        </Link>
        <nav id="navmenu" className="navmenu">
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/shop">Shop</NavLink></li>
            <li><NavLink to="/features">Features</NavLink></li>
            <li><NavLink to="/faq">Faq</NavLink></li>
            <li><NavLink to="/testimonials">Testimonials</NavLink></li>
            <li><NavLink to="/contactus">Contact Us</NavLink></li>



            <li className="dropdown"><Link to="#"><span>VISHAL DUTT SHARMA</span> <i className=" ms-1  bi bi-chevron-down toggle-dropdown"></i></Link>
            <ul>
              <li><Link to="/profile?option=profile">Profile</Link></li>
              <li><Link to="/profile?option=wishlist">Wishlist</Link></li>
              <li><Link to="/profile?option=order">Orders</Link></li>
              <li><Link to="/profile?option=address">Address</Link></li>
              <li><Link to="/cart">Cart</Link></li>
              <li><Link to="/checkout">Checkout</Link></li>
              <li><button className='btn ms-2'>Logout</button>
              </li>
            </ul>
            </li>
          </ul>
          <i className={`mobile-nav-toggle d-xl-none  ms-1  bi ${showMenu?'bi-x':'bi-list'}` 
          }
           onClick = {()=>{setshowMenu(!showMenu)}}></i>
        </nav>

      </div>

    </div>

  </header>

   </>
  )
}
