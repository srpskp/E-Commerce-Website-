import React from 'react'
import BannerComp from '../Component/BannerComp'
import BlogArea from '../Component/BlogArea'
import BlogArea2 from '../Component/BlogArea2'

import BlogInsta from '../Component/BlogInsta'
import Footer from '../Component/Footer'
import Header from '../Component/Header'

export default function Blog() {
  return (
    <>
<Header/>
<BannerComp name='Our Blog' />
<BlogArea/>
<BlogArea2/>
<BlogInsta/>
<Footer/>
    </>
  )
}
