import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Api from '../Api/Api'



export default function CategorySection() {
  
  const [Product, setProduct] = useState([])

  const [cart, setcart] = useState([])

  let getData = () => {
    console.log("Data")
    Api.fetchData('Products').then(result => {
      setProduct([...result, Product])
     
    }
    )}
 
    // Api.fetchData('user').then(result => {
    //   // setProduct([...result, Product])
    //  console.log(result)
    // }
    // )


    // console.log(cart)

  let AddToCart = (data) => {
    console.log(data)

    // let ans = cart.filter(item=>item.pid === data.pid)

    // if(ans){
    //         alert('Product already in a cart....')
           
    //        }

    

  //   console.log(temp)
  //   console.log(temp.qnt)

  // console.log(temp.pid)
  // console.log(data.id)
  //     console.log(temp.pid)
      
//  var checkData = temp.filter(item=>item.pid === data.pid)
     

      // Api.AddData('cart',temp).then(()=>{
      //   console.log(temp)      
      //       })

        //     Api.fetchData('cart').then(result=>
        // {
        //     setcart([...result])
        //     console.log(result)
            
        // })
        let temp = {
          pid:data.id,
          name:data.title1,
          price:data.price,
          // qnt:20
        
          qnt:1
         
        }        

let checkData = cart.filter(item=>item.pid === data.id)
console.log(checkData.length)
console.log(checkData.pid)
console.log(checkData)


// var q=1
if(checkData.length>=1){

  // console.log('qnt')
  let temp = {
    pid:data.id,
    name:data.title1,
    price:data.price,
    qnt:1
    // qnt:temp.qnt+ 1
    // qnt:1
   
  }

  console.log(temp.qnt)
       alert('Product already in a cart....')
      
      //  var updatecart = cart.map(item=>{
      //   if(item.pid === data.id){
      //     return{...item,qnt:item.qnt+1}
      //   }
      //  })

      //  setcart(updatecart)
// console.log(cart)
// cart[checkData].qnt++

      //  Api.fetchData('cart').then(result=>
      //   {
      //       setcart([...result])
      //       console.log(result)
            
      //   })
    //     console.log(temp.qnt)
    //     temp.qnt = temp.qnt +1
    //     console.log(temp.qnt)

  //  var sum =  cart.map(item=>item.qnt+1)
  //   console.log(cart.qnt)
          
  Api.Update('cart',temp.pid,temp).then(result=>{
    // setcart(temp.qnt+1)
      //  console.log(cart)
        console.log(...result)
console.log('data')
        // Api.fetchData('cart').then(result=>
        //           {
        //             setcart([...result])
        //                console.log(result)
                      
        //            })
        // setcart(...cart)
        // console.log(cart)
        // temp.qnt = temp.qnt +1
        // console.log( temp.qnt)
     
       })

     
     
      //  Api.fetchData('cart',data.id,data).then(result=>
      //   {
      //       // setcart(temp.pid)
            
      //       console.log(result)
      //       // console.log(result.qnt+1)
      //          var Qnt={...result,Quantity:result.qnt+1}   
      //          console.log(Qnt)
      //       console.log(data)
            
      //   })

      }

    else{
      alert('Product Add...')

      let temp = {
        pid:data.id,
        name:data.title1,
        price:data.price,
        qnt:1
       
      }
      Api.AddData('cart',temp).then(()=>{
        console.log(temp)      
            })
    }

    Api.fetchData('cart').then(result=>
      {
          setcart([...result])
          console.log(result)
          
      })
}

  //  let updateData = (event) =>{
  //   event.preventDefault()
  //     Api.Update('Category',params.id,data).then(result => {
  //   console.log('Result Data....')
  //   setdata(result)
    
  //   navigate('/showcategory' )
  
  // })}

  useEffect(() => {

    getData()

  }, [])


  return (
    <>
      <section class="section-margin--small mb-5">
        <div class="container">
          <div class="row">
            <div class="col-xl-3 col-lg-4 col-md-5">
              <div class="sidebar-categories">
                <div class="head">Browse Categories</div>
                <ul class="main-categories">
                  <li class="common-filter">
                    <form action="#">
                      <ul>
                        <li class="filter-list"><input class="pixel-radio" type="radio" id="men" name="brand" /><label for="men">Men<span> (3600)</span></label></li>
                        <li class="filter-list"><input class="pixel-radio" type="radio" id="women" name="brand" /><label for="women">Women<span> (3600)</span></label></li>
                        <li class="filter-list"><input class="pixel-radio" type="radio" id="accessories" name="brand" /><label for="accessories">Accessories<span> (3600)</span></label></li>
                        <li class="filter-list"><input class="pixel-radio" type="radio" id="footwear" name="brand" /><label for="footwear">Footwear<span> (3600)</span></label></li>
                        <li class="filter-list"><input class="pixel-radio" type="radio" id="bayItem" name="brand" /><label for="bayItem">Bay item<span> (3600)</span></label></li>
                        <li class="filter-list"><input class="pixel-radio" type="radio" id="electronics" name="brand" /><label for="electronics">Electronics<span> (3600)</span></label></li>
                        <li class="filter-list"><input class="pixel-radio" type="radio" id="food" name="brand" /><label for="food">Food<span> (3600)</span></label></li>
                      </ul>
                    </form>
                  </li>
                </ul>
              </div>
              <div class="sidebar-filter">
                <div class="top-filter-head">Product Filters</div>
                <div class="common-filter">
                  <div class="head">Brands</div>
                  <form action="#">
                    <ul>
                      <li class="filter-list"><input class="pixel-radio" type="radio" id="apple" name="brand" /><label for="apple">Apple<span>(29)</span></label></li>
                      <li class="filter-list"><input class="pixel-radio" type="radio" id="asus" name="brand" /><label for="asus">Asus<span>(29)</span></label></li>
                      <li class="filter-list"><input class="pixel-radio" type="radio" id="gionee" name="brand" /><label for="gionee">Gionee<span>(19)</span></label></li>
                      <li class="filter-list"><input class="pixel-radio" type="radio" id="micromax" name="brand" /><label for="micromax">Micromax<span>(19)</span></label></li>
                      <li class="filter-list"><input class="pixel-radio" type="radio" id="samsung" name="brand" /><label for="samsung">Samsung<span>(19)</span></label></li>
                    </ul>
                  </form>
                </div>
                <div class="common-filter">
                  <div class="head">Color</div>
                  <form action="#">
                    <ul>
                      <li class="filter-list"><input class="pixel-radio" type="radio" id="black" name="color" /><label for="black">Black<span>(29)</span></label></li>
                      <li class="filter-list"><input class="pixel-radio" type="radio" id="balckleather" name="color" /><label for="balckleather">Black
                        Leather<span>(29)</span></label></li>
                      <li class="filter-list"><input class="pixel-radio" type="radio" id="blackred" name="color" /><label for="blackred">Black
                        with red<span>(19)</span></label></li>
                      <li class="filter-list"><input class="pixel-radio" type="radio" id="gold" name="color" /><label for="gold">Gold<span>(19)</span></label></li>
                      <li class="filter-list"><input class="pixel-radio" type="radio" id="spacegrey" name="color" /><label for="spacegrey">Spacegrey<span>(19)</span></label></li>
                    </ul>
                  </form>
                </div>
                <div class="common-filter">
                  <div class="head">Price</div>
                  <div class="price-range-area">
                    <div id="price-range"></div>
                    <div class="value-wrapper d-flex">
                      <div class="price">Price:</div>
                      <span>$</span>
                      <div id="lower-value"></div>
                      <div class="to">to</div>
                      <span>$</span>
                      <div id="upper-value"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-9 col-lg-8 col-md-7">

              <div class="filter-bar d-flex flex-wrap align-items-center">
                <div class="sorting">
                  <select>
                    <option value="1">Default sorting</option>
                    <option value="1">Default sorting</option>
                    <option value="1">Default sorting</option>
                  </select>
                </div>
                <div class="sorting mr-auto">
                  <select>
                    <option value="1">Show 12</option>
                    <option value="1">Show 12</option>
                    <option value="1">Show 12</option>
                  </select>
                </div>
                <div>
                  <div class="input-group filter-bar-search">
                    <input type="text" placeholder="Search" />
                    <div class="input-group-append">
                      <button type="button"><i class="ti-search"></i></button>
                    </div>
                  </div>
                </div>
              </div>

              <section class="lattest-product-area pb-40 category-list">

                <div class="row">
                {Product ? Product.map((item) => (
                    <div class="col-md-6 col-lg-4">
                      <div class="card text-center card-product">
                        <div class="card-product__img">
                          <img class="card-img" src="img/product/product1.png" alt="" />
                          <ul class="card-product__imgOverlay">
                            <li><button><i class="ti-search"></i></button></li>
                            <li><button onClick={()=>AddToCart(item)}><i class="ti-shopping-cart"></i></button></li>
                            <li><button><i class="ti-heart"></i></button></li>
                          </ul>
                        </div>

                        <div class="card-body">
                          <p>{item.category1}</p>
                          <h4 class="card-product__title"><a href="#">{item.title1}</a></h4>
                          <p class="card-product__price">{item.price}</p>
                        </div>

                      </div>
                    </div>)) : <h2>Loding...</h2>}

               

                  {/* <div class="col-md-6 col-lg-4">
                <div class="card text-center card-product">
                  <div class="card-product__img">
                    <img class="card-img" src="img/product/product4.png" alt=""/>
                    <ul class="card-product__imgOverlay">
                      <li><button><i class="ti-search"></i></button></li>
                      <li><button><i class="ti-shopping-cart"></i></button></li>
                      <li><button><i class="ti-heart"></i></button></li>
                    </ul>
                  </div>
                  <div class="card-body">
                    <p>Decor</p>
                    <h4 class="card-product__title"><a href="#">Room Flash Light</a></h4>
                    <p class="card-product__price">$150.00</p>
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-lg-4">
                <div class="card text-center card-product">
                  <div class="card-product__img">
                    <img class="card-img" src="img/product/product5.png" alt=""/>
                    <ul class="card-product__imgOverlay">
                      <li><button><i class="ti-search"></i></button></li>
                      <li><button><i class="ti-shopping-cart"></i></button></li>
                      <li><button><i class="ti-heart"></i></button></li>
                    </ul>
                  </div>
                  <div class="card-body">
                    <p>Accessories</p>
                    <h4 class="card-product__title"><a href="#">Man Office Bag</a></h4>
                    <p class="card-product__price">$150.00</p>
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-lg-4">
                <div class="card text-center card-product">
                  <div class="card-product__img">
                    <img class="card-img" src="img/product/product6.png" alt=""/>
                    <ul class="card-product__imgOverlay">
                      <li><button><i class="ti-search"></i></button></li>
                      <li><button><i class="ti-shopping-cart"></i></button></li>
                      <li><button><i class="ti-heart"></i></button></li>
                    </ul>
                  </div>
                  <div class="card-body">
                    <p>Kids Toy</p>
                    <h4 class="card-product__title"><a href="#">Charging Car</a></h4>
                    <p class="card-product__price">$150.00</p>
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-lg-4">
                <div class="card text-center card-product">
                  <div class="card-product__img">
                    <img class="card-img" src="img/product/product7.png" alt=""/>
                    <ul class="card-product__imgOverlay">
                      <li><button><i class="ti-search"></i></button></li>
                      <li><button><i class="ti-shopping-cart"></i></button></li>
                      <li><button><i class="ti-heart"></i></button></li>
                    </ul>
                  </div>
                  <div class="card-body">
                    <p>Accessories</p>
                    <h4 class="card-product__title"><a href="#">Blutooth Speaker</a></h4>
                    <p class="card-product__price">$150.00</p>
                  </div> 
                </div>
              </div>
              <div class="col-md-6 col-lg-4">
                <div class="card text-center card-product">
                  <div class="card-product__img">
                    <img class="card-img" src="img/product/product8.png" alt=""/>
                    <ul class="card-product__imgOverlay">
                      <li><button><i class="ti-search"></i></button></li>
                      <li><button><i class="ti-shopping-cart"></i></button></li>
                      <li><button><i class="ti-heart"></i></button></li>
                    </ul>
                  </div>
                  <div class="card-body">
                    <p>Kids Toy</p>
                    <h4 class="card-product__title"><a href="#">Charging Car</a></h4>
                    <p class="card-product__price">$150.00</p>
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-lg-4">
                <div class="card text-center card-product">
                  <div class="card-product__img">
                    <img class="card-img" src="img/product/product1.png" alt=""/>
                    <ul class="card-product__imgOverlay">
                      <li><button><i class="ti-search"></i></button></li>
                      <li><button><i class="ti-shopping-cart"></i></button></li>
                      <li><button><i class="ti-heart"></i></button></li>
                    </ul>
                  </div>
                  <div class="card-body">
                    <p>Accessories</p>
                    <h4 class="card-product__title"><a href="#">Quartz Belt Watch</a></h4>
                    <p class="card-product__price">$150.00</p>
                  </div>
                </div>
              </div> */}
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}



