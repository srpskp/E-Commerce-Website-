import React from 'react'
import BannerComp from '../Component/BannerComp'
import Footer from '../Component/Footer'
import Header from '../Component/Header'
import RegisterLoginBox from '../Component/RegisterLoginBox'

export default function Register() {
  return (
    <>
<Header/>
<BannerComp name='Register'  />
<RegisterLoginBox/>
<Footer/>
    </>
  )
}
