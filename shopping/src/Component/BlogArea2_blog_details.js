import React from 'react'
import BlogArea2_view_button from './BlogArea2_view_button'

export default function BlogArea2_blog_details(props) {
  return (
    <>
<div class="blog_details">
                                      <a href="single-blog.html">
                                          <h2>{props.text}</h2>
                                      </a>
                                      <p>MCSE boot camps have its supporters and its detractors. Some people do not understand
                                          why you should have to spend money on boot camp when you can get the MCSE study
                                          materials yourself at a fraction.</p>
                                      <BlogArea2_view_button/>
                                  </div>
    </>
  )
}
