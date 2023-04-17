import React, { useEffect, useState } from 'react'
import Api from '../Api/Api'
import BannerComp from '../Component/BannerComp'

import CategorySection from '../Component/CategorySection'
import CategoryTopProduct from '../Component/CategoryTopProduct'
import Footer from '../Component/Footer'
import Header from '../Component/Header'
import Product from '../Component/Product'
import ProductsTable from '../Component/ProductsTable'
import Products_table from '../Component/Products_table'
import Subscribe from '../Component/Subscribe'

export default function Category() {

 
  
  return (
    <>
    <Header/>
    <BannerComp name='Shop Category' />
        
         <CategorySection/>
         {/* <ProductsTable/> */}
         {/* <Products_table/> */}
         {/* <Products_table/> */}
        
         <CategoryTopProduct/>
         <Subscribe/>
    <Footer/>

    </>
  )
}
