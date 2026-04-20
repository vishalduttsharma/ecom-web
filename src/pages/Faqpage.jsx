import React from 'react'
import Breadcrum from '../component/Breadcrum'
import Faq from '../component/Faq'

export default function Faqpage() {
  return (
   <>
   <Breadcrum title="Frequenty Asked Questions" description={"Find answers to the most commonly asked questions about our products, orders, payments, and services to make your shopping experience smooth and hassle-free."}/>
   <Faq/>
   </>
  )
}
