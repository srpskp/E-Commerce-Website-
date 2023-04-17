import React from 'react'
import Blog_cate_details from './Blog_cate_details'

export default function BlogArea() {
  return (
    <>
<section class="blog_categorie_area">
    <div class="container">
      <div class="row">
        <div class="col-sm-6 col-lg-4 mb-4 mb-lg-0">
            <div class="categories_post">
                <img class="card-img rounded-0" src="img/blog/cat-post/cat-post-3.jpg" alt="post"/>
                <Blog_cate_details name='Social Life' details='Enjoy your social life together'/>
               
            </div>
        </div>
        <div class="col-sm-6 col-lg-4 mb-4 mb-lg-0">
          <div class="categories_post">
            <img class="card-img rounded-0" src="img/blog/cat-post/cat-post-2.jpg" alt="post"/>
            <Blog_cate_details name='Politics' details='Be a part of politics'/>

           
          </div>
        </div>
        <div class="col-sm-6 col-lg-4 mb-4 mb-lg-0">
            <div class="categories_post">
                <img class="card-img rounded-0" src="img/blog/cat-post/cat-post-1.jpg" alt="post"/>
                <Blog_cate_details   name='Food' details='Let the food be finished'/>

               
            </div>
        </div>
      </div>
    </div>
  </section>
    </>
  )
}
