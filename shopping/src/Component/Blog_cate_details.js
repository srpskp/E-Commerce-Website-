import React from 'react'

export default function Blog_cate_details(props) {
  return (
    <>
    
         <div class="categories_details">
                    <div class="categories_text">
                        <a href="single-blog.html">
                            <h5>{props.name}</h5>
                        </a>
                        <div class="border_line"></div>
                        <p>{props.details}</p>
                    </div>
                </div>
               
    </>
  )
}
