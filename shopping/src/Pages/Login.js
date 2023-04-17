import React from 'react'
import BannerComp from '../Component/BannerComp'
import Footer from '../Component/Footer'
import Header from '../Component/Header'
import LoginBox from '../Component/LoginBox'

export default function Login() {
  return (
    <>
      <Header/>
      <BannerComp name='Login / Register'  />
      <LoginBox/>
      <Footer/>
    </>
  )
}
