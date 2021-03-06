import React, {useState} from 'react';
import styled from "styled-components";
import {Logo,Bg} from "./assets";
import Helmet from "react-helmet"


function App() {
  

const [username, setUsername] = useState<string>("")


  return (
    <Container>
      <div className="login-page">
        <div className="box">
          <div className="left">
            <img src={Logo} className="gambar"/>
            <h3>Create Account</h3>
            <button type="button" className="register-btn">Register</button>
          </div>

          <div className="right">
            <img src={Logo} className="gambar" />
            <h3>Have an Account ?</h3>
            <button type="button" className="login-btn">Login</button>
          </div>
          
          <div className="form">
            <div className="login-form">
              <h3>Log In</h3>
              <div className="form-group">
                <input type="text" placeholder="Email Address*" className="form-control" value={username} onChange={(e)=>setUsername(e.target.value)} />
              </div>
              <div className="form-group">
                <input type="password" placeholder="Password*" className="form-control"/>
              </div>
              <div className="form-group">
                <label>
                  <input type="checkbox"/> Remember Me
                </label>
              </div>
              <button type="button" className="submit-btn" onClick={btnLogin}>Login</button>
              <p><a href="#" className="register-btn">Register</a> | <a href="#" className="lost-pass-btn">Lost Your Password ?</a></p>
            </div>
            <div className="register-form form-hidden">
              <h3>Register</h3>
              <div className="form-group">
                <input type="text" placeholder="First Name*" className="form-control" />
              </div>
              <div className="form-group">
                <input type="text" placeholder="Last Name*" className="form-control" />
              </div>
              <div className="form-group">
                <input type="text" placeholder="Email Address*" className="form-control"/>
              </div>
              <div className="form-group">
                <input type="password" placeholder="Password*" className="form-control"/>
              </div>
              
              <button type="button" className="submit-btn">Register</button>
              <p><a href="#" className="login-btn">Login</a> | <a href="#" className="lost-pass-btn">Lost Your Password ?</a></p>
            </div>
            <div className="lost-password-form form-hidden">
              <h3>Lost Your Password ?</h3>
              <h5>You will receive a link to create a new password via email.</h5>
              
              <div className="form-group">
                <input type="text" placeholder="Email Address*" className="form-control"/>
              </div>
              
              
              <button type="button" className="submit-btn">Reset Password</button>
              <p><a href="#" className="login-btn">Login</a> | <a href="#" className="register-btn">Register</a></p>
            </div>

          </div>
        </div>
      </div>

			<Helmet>
				<script src="script.login.register.forgot.js"></script>
			</Helmet>

    </Container>
  );

  function btnLogin(){
		window.location.href="/dashboard"
	}
}


const Container = styled.div `



.login-page{
	min-height: 100vh;
	padding:15px;
	background-color: #eeeeee;
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;
}
.login-page .box{
	background-image: url(${Bg});
	background-size: cover;
	background-position: -160px center;
	background-repeat: repeat-x;
	flex:0 0 700px;
	max-width: 700px;
	min-height: 480px;
	box-shadow: 0 0 10px #dddddd;
	display: flex;
	flex-wrap: wrap;
	position: relative;
	z-index: 1;
	transition: all 0.5s ease-in-out;
}
.login-page .box.slide-active{
	background-position:160px center;
}

.login-page .box::before{
	content: '';
	position: absolute;
	left:0;
	top:0;
	width: 100%;
	height:100%;
	z-index: -1;
	background-color: rgba(0,0,0,0.4);
}
.login-page .box .left,
.login-page .box .right{
  flex:0 0 50%;
  max-width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding:40px 0;
}

.login-page .box .left h3,
.login-page .box .right h3{
	font-size: 20px;
	color:#ffffff;
	margin:0 0 15px;
}

.login-page .box .left .register-btn,
.login-page .box .right .login-btn{
  background-color: transparent;
  padding: 10px 35px;
  color:#ffffff;
  border:1px solid #ffffff;
  font-size: 16px;
  cursor: pointer;
  border-radius: 2px;
}

.login-page .box .left .register-btn:focus,
.login-page .box .right .login-btn:focus{
  outline: none;
}
.login-page .box .form{
	position: absolute;
	background-color: #ffffff;
	height: 100%;
	width: 50%;
	right:0;
	top:0;
	padding:30px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	transition: all 0.5s ease-in-out;
}
.login-page .box.slide-active .form{
	right: 50%;
}


.login-page .box .form h3{
	font-size: 20px;
	color:#000000;
	margin:0 0 30px;
}

.login-page .box .form .form-group{
	margin-bottom: 20px;
}

.login-page .box .form .lost-password-form,
.login-page .box .form .login-form,
.login-page .box .form .register-form{
  transition: all 0.5s ease-in-out;
} 

.login-page .box .form .form-control{
	width: 100%;
	height: 45px;
	font-size: 16px;
	color:#000000;
	border:none;
	border-bottom:1px solid #cccccc;
	padding:0;
}
.login-page .box .form .form-control:focus{
	outline: none;
}
.login-page .box .form label{
	font-size: 16px;
	color:#555555;
}
.login-page .box .form .submit-btn{
	width: 100%;
	height: 40px;
	background-color: #0078D4;
	border:none;
	border-radius: 2px;
	color:#ffffff;
	margin-top:10px;
	font-size: 16px;
	cursor: pointer;
}
.login-page .box .form .submit-btn:focus{
	outline: none;
}
.login-page .box .form p{
  margin-top:20px;
  text-align: center;
}
.login-page .box .form h5{
	font-size: 16px;
	color:#555555;
	margin:0 0 30px;
	font-weight: normal;
}

.login-page .box .form p a{
	font-size: 16px;
	text-decoration: none;
	display: inline-block;
	color:#3f51b5;
}

.login-page .box .form .form-hidden{
	max-height: 0;
	visibility: hidden;
	opacity:0;
	overflow:hidden;
}
.gambar{
	height: 100px;
	width: 250px;
	position: auto;
}

/*responsive*/

@media(max-width: 767px){
   .login-page .box{
   	 flex:0 0 100%;
   	 max-width: 100%;
   }
}
@media(max-width: 575px){
	.login-page .box .form{
		width: 100%;
		position: relative;
		right: auto;
		top:auto;
		height: auto;
	}
	.login-page .box,
	.login-page .box.slide-active{
        background-position: center;
	}
	.login-page .box .left h3, .login-page .box .right h3{
		font-size: 16px;
	}
	.login-page .box.slide-active .form{
		right:auto;
	}
}

`


export default App;
