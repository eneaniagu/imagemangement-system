import React from 'react'
import Link from "next/link";
import axios from 'axios'
import { NextRouter, useRouter } from "next/router";
import { useEffect, useState } from "react";
import Cookies from 'js-cookie';

function home() {

    const router  = useRouter();


     const handlesubmission = async () => {
          const data = {
             fullname,
             email,
              password, 
              cpassword
          }
          console.log(data)
         
        const res = await axios.post('https://nurbansports.com/empolyeeapi/public/mgtn', data);
       
         const toke = JSON.stringify(res.data.data)
         if (res.status === 201){
             console.log(toke)
             Cookies.set('user', toke)
             router.push("/")
         }
     }

     const [fullname, setFullname] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cpassword, setCpassword] = useState('');
    



    return (
        <div>
            <div className="container">
			
	<div className="screen">
		
		<div className="screen__content">
			<div className="login">
			<h3 className=""> Image Management system </h3>
				<div className="login__field">
					<i className="login__icon fas fa-user"></i>
					<input type="text" className="login__input"  onChange={(e) => setFullname(e.target.value) }  value={fullname}placeholder="Full Name"/>
				</div>

                <div className="login__field">
					<i className="login__icon fas fa-user"></i>
					<input type="text" onChange={(e) => setEmail(e.target.value) }  value={email} className="login__input" placeholder="Email Address"/>
				</div>

                <div className="login__field">
					<i className="login__icon fas fa-user"></i>
					<input type="password"  onChange={(e) => setPassword(e.target.value) }  value={password} className="login__input" placeholder="Password"/>
				</div>
				<div className="login__field">
					<i className="login__icon fas fa-lock"></i>
					<input type="password"  onChange={(e) => setCpassword(e.target.value) }  value={cpassword} className="login__input" placeholder="confirm Password" />
				</div>
				<button className="button login__submit" onClick={handlesubmission}>
					<span className="button__text">Sign Up Now</span>
					<i className="button__icon fas fa-chevron-right"></i>
				</button>				
			</div>
			<div className="social-login">
			<Link href="/home">
                                <a className="shy">login</a>
                            </Link>
				<div className="social-icons">
					<a href="#" className="social-login__icon fab fa-instagram"></a>
					<a href="#" className="social-login__icon fab fa-facebook"></a>
					<a href="#" className="social-login__icon fab fa-twitter"></a>
				</div>
			</div>
		</div>
		<div className="screen__background">
			<span className="screen__background__shape screen__background__shape4"></span>
			<span className="screen__background__shape screen__background__shape3"></span>		
			<span className="screen__background__shape screen__background__shape2"></span>
			<span className="screen__background__shape screen__background__shape1"></span>
		</div>		
	</div>
</div>
        </div>
    )
}

export default home


