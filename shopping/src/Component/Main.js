import React from 'react'
import Banner from './Banner'

import Carousel from './Carousel'
import Footer from './Footer'
import MainBlog from './MainBlog'
import Offer from './Offer'
import Product from './Product'
import SeelingItem from './SeelingItem'
import Subscribe from './Subscribe'

export default function Main() {
  return (
    <>
         <main class="site-main">
            <Banner/>
            <Carousel/>
            <Product/>
            <Offer/>
            <SeelingItem/>
            <MainBlog/>
            <Subscribe/>
            

         </main>
    </>
  )
}
