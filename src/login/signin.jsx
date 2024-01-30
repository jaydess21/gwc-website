// SignIn.js
import React from 'react';

const SignIn = () => {
  return (
    <center><div>
      <h2>Sign In Page</h2>
      <p>Sign in to access your account.</p>
      <input type="text" id="username" name="uname" placeholder='"Enter your Username'></input><br></br>
      
      <input type="text" id="password" name="pswd" placeholder='Enter your Password'></input><br></br>
      

      <a href="/login"><button type="submit">Login</button></a>
      
      <a href="/about"><button type="submit">Create Account</button></a>
      
    </div></center>

    
  );
};

export default SignIn;
