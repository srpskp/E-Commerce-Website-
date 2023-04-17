import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import Api from '../Api/Api'

export default function LoginBox() {
	const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')
   
   

    let handleemail = (event) =>{
        setEmail(event.target.value)
    }
    let handlepassword = (event) =>{
        setPassword(event.target.value)
    }

    let handleLogin = (event) => {
        event.preventDefault();

        // let getData =()=> {
          Api.fetchData('user').then(result=>
                {
                    
                    console.log(result)
                // })
        // }
        var temp = result.filter(item=>item.email==Email && item.password==Password)
       
         if (temp.length>=1)
      {
            localStorage.setItem('email',Email)
            // localStorage.setItem('admin',id)
          window.location.href = 'cart'
            //   Swal.fire(
            //     'Login Done!',
            //     'Welcome to Instagram!',
            //     'success'
            //   )
        }
        else {
            
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
                
              })
        }
      
    })   
    }
    useEffect(() => {
        // getData()
       }, [])
  return (
    <>
<section class="login_box_area section-margin">
		<div class="container">
			<div class="row">
				<div class="col-lg-6">
					<div class="login_box_img">
						<div class="hover">
							<h4>New to our website?</h4>
							<p>There are advances being made in science and technology everyday, and a good example of this is the</p>
							<Link class="button button-account" to="register">Create an Account</Link>
						</div>
					</div>
				</div>
				<div class="col-lg-6">
					<div class="login_form_inner">
						<h3>Log in to enter</h3>
						<form onSubmit={handleLogin} class="row login_form" action="#/" id="contactForm" >
							<div class="col-md-12 form-group">
								 <input type="text" class="form-control" id="name email" name="name" placeholder="Useremail" onChange={handleemail} value={Email} onfocus="this.placeholder = ''" onblur="this.placeholder = 'Username'"/>
							</div>
							<div class="col-md-12 form-group">
								<input type="password" class="form-control" id="name" name="name" placeholder="Password" onChange={handlepassword} value={Password} onfocus="this.placeholder = ''" onblur="this.placeholder = 'Password'"/>
							</div>
							<div class="col-md-12 form-group">
								<div class="creat_account">
									<input type="checkbox" id="f-option2" name="selector"/>
									<label for="f-option2">Keep me logged in</label>
								</div>
							</div>
							<div class="col-md-12 form-group">
								<button type="submit" value="submit" class="button button-login w-100" >Log In</button>
								<a href="#">Forgot Password?</a>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</section>
    </>
  )
}
