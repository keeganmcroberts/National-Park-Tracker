import React, { useRef, useEffect, useState } from 'react';

function Login(){

    const [signupLogin, setSignupLogin] = useState(true)
    const [user, setUser] = useState("")
    const [accountLoginInfo, setAccountLoginInfo] = useState({
        email:'email...',
        password:'password...'
    })

    const {email, password} = accountLoginInfo


    const handleChange = (e) => {
        setAccountLoginInfo({
            ...accountLoginInfo,
            [e.target.name]: e.target.value,
        });
      }


      function handleSigup(e){
          e.preventDefault()

          const userInfo = {accountLoginInfo};

          fetch("/users", {
              method: "POST",
              headers:{
                  "Content-Type": "application/json",
              },
              body: JSON.stringify(userInfo),
          }).then((res) =>{
              if (res.ok){
                  res.json().then((user) =>{
                      setUser(user);
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
            <form onSubmit={login}>
                
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