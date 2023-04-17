import React from 'react'
import BannerComp from '../Component/BannerComp'
import ConfirmationArea from '../Component/ConfirmationArea'
import Footer from '../Component/Footer'
import Header from '../Component/Header'

export default function Confirmation() {
  return (
    <>
    <Header/>
    <BannerComp name='Order Confirmation' />
    <ConfirmationArea/>
    <Footer/>

    </>
  )
}
