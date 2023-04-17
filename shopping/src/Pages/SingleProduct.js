import React from 'react'
import BannerComp from '../Component/BannerComp'
import Footer from '../Component/Footer'
import Header from '../Component/Header'
import SingleProductArea from '../Component/SingleProductArea'
import SingleProductDescribtion from '../Component/SingleProductDescribtion'
import SingleProductImg from '../Component/SingleProductImg'

export default function SingleProduct() {
  return (
    <>
      <Header/>
      <BannerComp name='Shop Single' />
      <SingleProductImg/>
      <SingleProductDescribtion/>
      <SingleProductArea/>
      <Footer/>

    </>
  )
}
