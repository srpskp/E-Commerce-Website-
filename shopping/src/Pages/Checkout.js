import React from 'react'
import BannerComp from '../Component/BannerComp'
import Checkoutarea from '../Component/Checkoutarea'

import Footer from '../Component/Footer'
import Header from '../Component/Header'

export default function Checkout() {
  return (
    <>
       <Header/>
       <BannerComp name='Product Checkout' />
       <Checkoutarea/>
       <Footer/>
    </>
  )
}
