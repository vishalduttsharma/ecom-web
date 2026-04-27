import React from 'react'
import Breadcrum from '../component/Breadcrum'
import About from '../component/About'
import Features from '../component/Features'
import Testimonials from '../component/Testimonials'
import Faq from '../component/Faq'

export default function Aboutpage() {
  return (
  <>
 <Breadcrum  title="About Us" description="Here’s a clean **25-word “About Us”** for your e-commerce website *Heritageally*:

“Heritageally celebrates timeless tradition by offering authentic, handcrafted products. We connect skilled artisans with modern customers, delivering quality, culture, and heritage-inspired designs worldwide.”
"/>
<About/>
<Features/>
<Testimonials/>
<Faq/>
  </>
  )
}
