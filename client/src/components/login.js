import React, { useRef, useEffect, useState } from 'react';

function Login(){

    const [signupLogin, setSignupLogin] = useState(true)
    const [user, setUser] = useState("")
    const [accountLoginInfo, setAccountLoginInfo] = useState({
        email:'',
        password:''
    })

    
    
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
                  })
              } else {
                  res.json().then((errors) => {
                    console.log(errors)
                  })
              }
          })
      }

      function createAccount(){
          setSignupLogin(!signupLogin)
      }

      function login(event){
          event.preventDefault()
      }



    return(
        (signupLogin ? 
        <div className="login">
            <h1>Login</h1>
            <form onSubmit={login}>
                
                <input className='login-links'  name="email" value={email} onChange={handleChange} required />
                <br></br>
                
                <input className='login-links'  name="password" value={password} onChange={handleChange} required />
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
                
                <input className='login-links'  name="email" value={email} onChange={handleChange} required />
                <br></br>
                
                <input className='login-links'  name="password" value={password} onChange={handleChange} required />
                <h5 className='login-options'>Forgot Password?</h5>
                <h5 onClick={createAccount} className='login-options'>Already have an account? Sign in</h5>
                <br></br>
                <input className='login-button' type="submit" value="Sign up"></input>
            </form>
        </div>
        )
    )

}

export default Login;