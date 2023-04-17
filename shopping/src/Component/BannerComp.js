import React from 'react'

export default function BannerComp(props) {
  return (
    <>
<section class="blog-banner-area" id="category">
		<div class="container h-100">
			<div class="blog-banner">
				<div class="text-center">
					<h1>{props.name}</h1>
					<nav aria-label="breadcrumb" class="banner-breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><a href="#">Home</a></li>
              <li class="breadcrumb-item active" aria-current="page">{props.name}</li>
            </ol>
          </nav>
				</div>
			</div>
    </div>
	</section>

	
    </>
  )
}
