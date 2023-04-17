import React, { useEffect, useState } from 'react'

import Api from '../Api/Api'

export default function CartArea() {
    const [data, setdata] = useState([])
    const [Qnt, setQnt] = useState()
    const [total, settotal] = useState(0)
   
   const user = localStorage.getItem('email')

   if(user) {
    
   }
   
    let checkAuth = () => {
            var edata = localStorage.getItem('email')
            // var userdata = localStorage.getItem('admin')
            // let user = JSON.parse(localStorage.getItem('user-info'))
        
            console.log(edata)
            if(edata == null || edata == 'undefined' || edata == " ")
            {
                // alert('wrong')
                window.location.href = "login"
            }
            // else {
                
                // document.getElementById('authname').innerHTML = edata
            // }
        }
        checkAuth()  

        let  getDeta = ()=>{ 
            console.log("Data")
            Api.fetchData('cart').then(result=>
               {
                   setdata([...result])
                //    settotal(handleprice())
               }
        ) }
    // console.log(data[data.price])
       
        let plus = (obj) => {
            obj.qnt= obj.qnt+1
            console.log(obj)

            // handleprice(obj)
            Api.Update('cart',obj.id,obj).then(result=>{
                   console.log(result)
                  getDeta()
                 handleprice(result)
                })
                // setdata(...data,obj.qnt) 
                // console.log(obj)
            

            // console.log(pid)
        //   var updatedata = data.map((item)=>{
            // if(item.id === pid){
                // console.log(item.qnt++)
                // setdata(...item,item.qnt++,updatedata)
                //  setdata(...item,item.qnt +1,updatedata)
            // }
        //   })
         
          
           
        }
    //     Api.AddData('cart').then(result=>
    //         {
    //             setdata(...result)
                
    //         }
    //  )  
    
      let minus = (obj) => {
        obj.qnt= obj.qnt-1
        console.log("data1"+obj)
        // handleprice(obj)
        Api.Update('cart',obj.id,obj).then(result=>{
            console.log(obj)
            console.log(result)
            getDeta()
            handleprice(result)
            //   settotal(handleprice())
            })
          
        }

        let handleQnt = (event) =>{
            setQnt(event.target.value)
            // handleprice()
        }

        console.log(total)
        var handleprice = (obj) => {
          
            var ans=0
            ans += obj.price * obj.qnt
    //   obj.map((item)=>{ans+=item.price * item.qnt ; console.log("total"+ ans)})
          
    // obj.map((item)=>{ans+=item.price * item.qnt ; console.log("total"+ ans)})

        // data.map((item)=>{ans+=item.price * item.qnt })
            // ans+=data1.price * data1.qnt
            // setprice('total')
            // price(ans)
            console.log(ans)
            settotal(ans)
          
           
            console.log(total)

            // getDeta()
               
        }
useEffect(() => {
 getDeta()
//  handleprice()
}, [])

  return (
    <>
<section class="cart_area">
      <div class="container">
          <div class="cart_inner">
              <div class="table-responsive">
                  <table class="table">
                      <thead>
                          <tr>
                              <th scope="col">Product</th>
                              <th scope="col">Price</th>
                              <th scope="col">Quantity</th>
                              <th scope="col">Total</th>
                          </tr>
                      </thead>
                      <tbody>
                    {data ? data.map((item) => (
                        <tr>
                              <td>
                                  <div class="media">
                                      <div class="d-flex">
                                          <img src="img/cart/cart1.png" alt=""/>
                                      </div>
                                      <div class="media-body">
                                          <p >  {item.name} </p>
                                      </div>
                                  </div>
                              </td>
                              <td>
                                  <h5 > {item.price} </h5>
                              </td>
                              <td>
                                  <div class="product_count">
                                  
                                      <input type="text" name="qty" value={item.qnt} onChange={handleQnt}   id="sst" maxlength="12"  title="Quantity:"
                                          class="input-text qty" />
                                      <button onclick="var result = document.getElementById('sst'); var sst = result.value; if( !isNaN( sst )) result.value++;return false;"
                                          class="increase items-count" type="button" onClick={() =>plus(item)}><i class="lnr lnr-chevron-up"></i></button>
                                      <button onclick="var result = document.getElementById('sst'); var sst = result.value; if( !isNaN( sst ) &amp;&amp; sst > 0 ) result.value--;return false;"
                                          class="reduced items-count" type="button" onClick={() =>minus(item)}><i class="lnr lnr-chevron-down"></i></button>
                                  </div>
                              </td>


                              <td><h5>
                                {/* {handleprice(item)} */}
                                {total  }
                            {/* onChange=  {handleprice()} */}
                              </h5>
                              </td>
                          </tr>
                                          )) : <h2>Loding...</h2>} 

                          {/* <tr>
                              <td>
                                  <div class="media">
                                      <div class="d-flex">
                                          <img src="img/cart/cart2.png" alt=""/>
                                      </div>
                                      <div class="media-body">
                                          <p>Minimalistic shop for multipurpose use</p>
                                      </div>
                                  </div>
                              </td>
                              <td>
                                  <h5>$360.00</h5>
                              </td>
                              <td>
                                  <div class="product_count">
                                      <input type="text" name="qty" id="sst" maxlength="12" value="1" title="Quantity:"
                                          class="input-text qty"/>
                                      <button onclick="var result = document.getElementById('sst'); var sst = result.value; if( !isNaN( sst )) result.value++;return false;"
                                          class="increase items-count" type="button"><i class="lnr lnr-chevron-up"></i></button>
                                      <button onclick="var result = document.getElementById('sst'); var sst = result.value; if( !isNaN( sst ) &amp;&amp; sst > 0 ) result.value--;return false;"
                                          class="reduced items-count" type="button"><i class="lnr lnr-chevron-down"></i></button>
                                  </div>
                              </td>
                              <td>
                                  <h5>$720.00</h5>
                              </td>
                          </tr> */}
                          {/* <tr>
                              <td>
                                  <div class="media">
                                      <div class="d-flex">
                                          <img src="img/cart/cart3.png" alt=""/>
                                      </div>
                                      <div class="media-body">
                                          <p>Minimalistic shop for multipurpose use</p>
                                      </div>
                                  </div>
                              </td>
                              <td>
                                  <h5>$360.00</h5>
                              </td>
                              <td>
                                  <div class="product_count">
                                      <input type="text" name="qty" id="sst" maxlength="12" value="1" title="Quantity:"
                                          class="input-text qty"/>
                                      <button onclick="var result = document.getElementById('sst'); var sst = result.value; if( !isNaN( sst )) result.value++;return false;"
                                          class="increase items-count" type="button"><i class="lnr lnr-chevron-up"></i></button>
                                      <button onclick="var result = document.getElementById('sst'); var sst = result.value; if( !isNaN( sst ) &amp;&amp; sst > 0 ) result.value--;return false;"
                                          class="reduced items-count" type="button"><i class="lnr lnr-chevron-down"></i></button>
                                  </div>
                              </td>
                              <td>
                                  <h5>$720.00</h5>
                              </td>
                          </tr> */}
                          {/* <tr class="bottom_button">
                              <td>
                                  <a class="button" href="#">Update Cart</a>
                              </td>
                              <td>

                              </td>
                              <td>

                              </td>
                              <td>
                                  <div class="cupon_text d-flex align-items-center">
                                      <input type="text" placeholder="Coupon Code"/>
                                      <a class="primary-btn" href="#">Apply</a>
                                      <a class="button" href="#">Have a Coupon?</a>
                                  </div>
                              </td>
                          </tr> */}
                          {/* <tr>
                              <td>

                              </td>
                              <td>

                              </td>
                              <td>
                                  <h5>Subtotal</h5>
                              </td>
                              <td>
                                  <h5>$2160.00</h5>
                              </td>
                          </tr> */}
                          {/* <tr class="shipping_area">
                              <td class="d-none d-md-block">

                              </td>
                              <td>

                              </td>
                              <td>
                                  <h5>Shipping</h5>
                              </td>
                              <td>
                                  <div class="shipping_box">
                                      <ul class="list">
                                          <li><a href="#">Flat Rate: $5.00</a></li>
                                          <li><a href="#">Free Shipping</a></li>
                                          <li><a href="#">Flat Rate: $10.00</a></li>
                                          <li class="active"><a href="#">Local Delivery: $2.00</a></li>
                                      </ul>
                                      <h6>Calculate Shipping <i class="fa fa-caret-down" aria-hidden="true"></i></h6>
                                      <select class="shipping_select">
                                          <option value="1">Bangladesh</option>
                                          <option value="2">India</option>
                                          <option value="4">Pakistan</option>
                                      </select>
                                      <select class="shipping_select">
                                          <option value="1">Select a State</option>
                                          <option value="2">Select a State</option>
                                          <option value="4">Select a State</option>
                                      </select>
                                      <input type="text" placeholder="Postcode/Zipcode"/>
                                      <a class="gray_btn" href="#">Update Details</a>
                                  </div>
                              </td>
                          </tr> */}
                          {/* <tr class="out_button_area">
                              <td class="d-none-l">

                              </td>
                              <td class="">

                              </td>
                              <td>

                              </td>
                              <td>
                                  <div class="checkout_btn_inner d-flex align-items-center">
                                      <a class="gray_btn" href="#">Continue Shopping</a>
                                      <a class="primary-btn ml-2" href="#">Proceed to checkout</a>
                                  </div>
                              </td>
                          </tr> */}
                      </tbody>
                  </table>
              </div>
          </div>
      </div>
  </section>
    </>
  )
}
