import React, { useContext, useState } from "react";
import "../css/Login.css";
import { Link } from "react-router-dom";
import axios from "axios";
import {GrinvoiceContext} from '../context/GrinvoiceContext'
import { useNavigate } from "react-router-dom";


const Login = () => {
  
  const {value3} = useContext(GrinvoiceContext);
  const [base_url, setBase_url] = value3
  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
 
  let navigate = useNavigate();
  const testLogin = (e) => {
    e.preventDefault()

    const user = {
      email : email,
      password : password
  }

  login(user).then(res => {
    if(res){
      navigate('/home')
    }
    }  )
  }

  const login = user =>{

    axios.post(`${base_url}/login`, {
      email : user.email,
      password : password
    })
    .then(res => {
      localStorage.setItem('usertoken', res.data)
      navigate(`/home`)
      return res.data
    }) 
    .catch(err => console.error(err))
    console.log(user)
    
  }

const handleClick = (e) =>{
  
  const user = {
    email : email,
    password :password
  }
  
  login(user).then(res => {
    if(res) {
      navigate('/home')
    }
  })
  
  e.preventDefault()

}

  return (
    <>

      <div className="Login">
        <div className="workContain">
            {/* <button onClick={()=>checkUser()}>check URL FOR FETCH USERS</button> */}
          <img
            className="logoPageLogin"
            src={require("../assets/logoPageLogin.png")}
            alt="logoPageLogin"
          />

          <div style={{ display: "flex", alignItems: "center" }}>
            <p>RECIEPT # 1428 (saved tree)</p> • <p>Fevrier 03 2023</p>
          </div>
          <p>Bill from : GRINVOICE </p>
          <p>
            We no longer need to cut down forests to print your bills and then
            immediately lose it ! <br />
            We don't need to search for them in thousands of emails. Grinvoice
            is a universal solution !
          </p>
          <h3>INVOICE TO:</h3>

          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <p># Description</p> <p>Price</p><p>QTY</p>
          </div>

          <div className="loginAndPasswordInputs">
            <div className="loginInput">
              <img
                src={require("../assets/loginInputImg.png")}
                alt=""
                className=""
              />
              <input type="email"  onChange={(e)=>setEmail(e.target.value)} placeholder="login" />
              <p>One saved Tree</p>
              <img
                src={require("../assets/loginPageTree.png")}
                alt=""
                className="loginTree"
              />
            </div>
            <div className="passwordInput">
              <img
                src={require("../assets/passwordInputImg.png")}
                alt=""
                className=""
              />
              <input type="password"  onChange={(e)=>setPassword(e.target.value)}  placeholder="password" />
              <p>One saved Tree</p>
              <img
                src={require("../assets/loginPageTree.png")}
                alt=""
                className="loginTree"
                />
            </div>
          </div>

          <div className="LoginAndForgotPass">
                <div className="totalLogin">
                    <p>Total :</p>
                    
                    <button onClick={(e)=>handleClick(e)}>LOGIN</button>
                </div>
                <div className="taxesForgotPass">
                    <p>Taxes :</p>
                    <button>forgot your password?</button>
                </div>
          </div>
            <p className="or">or</p>
            <p>Join our community. And build a history with us !</p>
            <Link to='/register'>   <button>Register</button>      </Link>


       </div>
      </div>
    </>
  );
};

export default Login;
