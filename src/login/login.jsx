// SignOut.js
import React from 'react';

const LogIn = () => {
  return (
    <center><div>
      <h2>Log In Page</h2>
      <p>Log in to access your account.</p>
      

      <input type="text" id="username" name="uname" placeholder='"Enter your Username'></input><br></br>
      
      <input type="text" id="password" name="pswd" placeholder='Enter your Password'></input><br></br>
      

      <a href="/about"><button type="submit">Login</button></a>
      
      <a href="/signin"><button type="submit">Don't have an account? Signup!</button></a>


      
    </div></center>
  );
};

export default LogIn;

