import React from 'react'
import BannerComp from '../Component/BannerComp'
import Footer from '../Component/Footer'
import Header from '../Component/Header'
import SingleBlogArea from '../Component/SingleBlogArea'
import SingleBlogInsta from '../Component/SingleBlogInsta'

export default function SingleBlog() {
  return (
    <>
    <Header/>
    <BannerComp name='Blog Details' />
    <SingleBlogArea/>
    <SingleBlogInsta/>
    <Footer/>

    </>
  )
}
