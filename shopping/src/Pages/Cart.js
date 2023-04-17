import React from 'react'
import BannerComp from '../Component/BannerComp'
import CartArea from '../Component/CartArea'
import Footer from '../Component/Footer'
import Header from '../Component/Header'

export default function Cart() {
  return (
    <>
<Header/>
<BannerComp name='Shopping Cart'  />
<CartArea/>
<Footer/>
    </>
  )
}
