import React, { useRef, useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom';

function Login({user, setUser}){

    const [signupLogin, setSignupLogin] = useState(true)
    const [loginErrorMessage, setLoginErrorMessage] = useState("")
    const [loginError, setLoginError] = useState(false)
    const [accountLoginInfo, setAccountLoginInfo] = useState({
        email:'',
        password:''
    })

    let navigate = useNavigate()
    
    const handleChange = (e) => {
        const {name, value} = e.target
        setAccountLoginInfo({...accountLoginInfo, [name]: value})
    }
    
    // console.log(accountLoginInfo)
    // const userInfo = {accountLoginInfo};
    // console.log("USERLOGIN", userInfo)
    
    const {email, password} = accountLoginInfo
    
    function handleSigup(e){
        e.preventDefault()

          const user = {
              email,
              password
          } 

          fetch("/users", {
              method: "POST",
              headers:{"Content-Type": "application/json" },
              body: JSON.stringify(user),
            })
            .then((res) =>{
              if (res.ok){
                  res.json().then(user =>{
                      console.log("USER", user);
                      
                      navigate(`/user/${user.id}`)

                  })
              } else {
                  res.json().then((errors) => {
                  })
              }
          })
      }


      function createAccount(){
          setSignupLogin(!signupLogin)
          setAccountLoginInfo({ email:'',
          password:''})
      }

      function login(event){
          event.preventDefault()
          const user = {
              email,
              password
          }
          fetch (`/login`,{
              method: 'POST',
              headers:{'Content-Type': 'application/json'},
              body:JSON.stringify(user)
          })
          .then(res=>{
              if(res.ok){
                  res.json().then(user=>{
                    setLoginError(false)
                      navigate(`/user/${user.id}`)
                  })
              } if(!res.ok){
                setLoginError(true)
                setLoginErrorMessage("Username or Password is Incorrect")
                  
                }
          })
      }

    return(
        (signupLogin ? 
        <div className="login">
            <h1>Login</h1>
            <form onSubmit={login}>
                <div className='login-form'>
                    <h4>email:</h4>
                    <input className='login-field'  name="email" value={email} onChange={handleChange} required />
                
                    <h4>password:</h4>
                    <input className='login-password'  name="password" value={password} onChange={handleChange} required />
                </div>
                {loginError ? 
                <h5 className="login-error-message">{loginErrorMessage}</h5>
                : null}
                <h5 className='login-options'>Forgot Password?</h5>
                <h5 onClick={createAccount} className='login-options'>Create Account</h5>
                <br></br>
                <input className='login-button' type="submit" value="Login"></input>
            </form>
        </div>
        : 
        <div className="login">
            <h1>Sign up</h1>
            <form onSubmit={handleSigup}>
                <div className='login-form'>
                    <h4>email:</h4>
                    <input className='login-field'  name="email" value={email} onChange={handleChange} required />
                    <h4>password:</h4>
                    <input className='login-password'  name="password" value={password} onChange={handleChange} required />
                </div>
                <h5 onClick={createAccount} className='login-options'>Have an account? Sign in</h5>
                <br></br>
                <input className='login-button' type="submit" value="Sign up"></input>
            </form>
        </div>
        )
    )

}

export default Login;