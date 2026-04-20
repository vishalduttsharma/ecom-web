import React from 'react'
import Breadcrum from '../component/Breadcrum'
import Faq from '../component/Faq'
import Features from '../component/Features'

export default function Featurepage() {
  return (
   <>
   <Breadcrum title="Our features" description="Discover what makes Heritageally special — premium quality products, unique heritage-inspired designs, secure payments, fast delivery, and a smooth shopping experience, all in one place."/>
 <Features/>
  <Faq/>
   </>
  )
}
