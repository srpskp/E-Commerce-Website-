import React, { useEffect, useState } from 'react'
import Api from '../Api/Api'

export default function Products_table() {
    const [Product, setProduct] = useState([

    ])

    let getData = () => {
        console.log("Data")
        Api.fetchData('Products').then(result => {
            setProduct([...result, Product])
        }



        )

    }

    useEffect(() => {

        getData()

    }, [])
    return (
        <>
            <div class="container pt-4 px-4">
                <div class="bg-light text-center rounded p-4">
                    <div class="d-flex align-items-center justify-content-between mb-4">
                        {/* <h6 class="mb-0">Products</h6>
                        <a href="">Show All</a> */}
                    </div>
                    <div class="table-responsive">
                        <table class="table text-start align-middle  table-hover mb-0">
                            {/* <thead>
                                <tr class="text-dark">
                                    <th scope="col">Id</th>
                                    <th scope="col">Photo</th>
                                    <th scope="col">Category</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Description</th>
                                    <th scope="col">Action</th>


                                   
                                </tr>
                            </thead> */}

                            {/* <thead> */}

                            <tr class="text-dark">

                                <th>
                                    <img src="img/product/product1.png" alt="" />
                                </th>
                                <th>
                                    <img src="img/product/product1.png" alt="" />
                                </th>
                                <th>
                                    <img src="img/product/product1.png" alt="" />
                                </th>


                            </tr>


                            {/* </thead>  */}
                            {/* <tbody>  */}
                            {Product ? Product.map((item) => (
                                <tr>

                                    <td>
                                        <div class="card-body">
                                            <p>{item.category1}</p>
                                            <h4 class="card-product__title"><a href="#">{item.title1}</a></h4>
                                            <p class="card-product__price">{item.price}</p>
                                        </div>

                                    </td>
                                    <td>
                                        <div class="card-body">
                                            <p>{item.category1}</p>
                                            <h4 class="card-product__title"><a href="#">{item.title1}</a></h4>
                                            <p class="card-product__price">{item.price}</p>
                                        </div>

                                    </td>
                                    <td>
                                        <div class="card-body">
                                            <p>{item.category1}</p>
                                            <h4 class="card-product__title"><a href="#">{item.title1}</a></h4>
                                            <p class="card-product__price">{item.price}</p>
                                        </div>

                                    </td>
                                   


                                </tr>


                            )) : <h2>Loding...</h2>}


                            {/* </tbody>  */}
                        </table>
                    </div>
                </div>
            </div>

        </>
    )
}

