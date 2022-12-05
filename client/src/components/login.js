import React, { useRef, useEffect, useState } from 'react';

function Login(){

    const [signupLogin, setSignupLogin] = useState(true)
    const [user, setUser] = useState("")
    const [account, setAccount] = useState({
        email:'email...',
        password:'password...'
    })

    const {email, password} = account


    const handleChange = (e) => {
        
        console.log(e.target)
        const { name, value } = e.target
        setAccount({ ...account, [name]: value })
      }

      function createAccount(){
          setSignupLogin(!signupLogin)
      }



    return(
        (signupLogin ? 
        <div className="login">
            <h1>Login</h1>
            <form>
                
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
            <form>
                
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