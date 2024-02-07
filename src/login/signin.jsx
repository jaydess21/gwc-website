// SignIn.js
import React from 'react';

const SignIn = () => {
  return (
    <center><div style={{ flex: '1', paddingLeft: '20px', fontSize: '18px' }}>
    <center>
    <div style={{ flex: '1', paddingLeft: '20px', fontSize: '18px' }}>
        <center>
          <div>
            <h2 style={{ fontSize: '38px' }}>Sign Up Page</h2>
            <p style={{ fontSize: '30px' }}>Create an Account to Budget, the Smart way!</p>
            
            <div style={{ marginBottom: '10px' }}>
              <input type="text" id="username" name="uname" placeholder='Enter your Username' style={{ width: '200px', marginBottom: '10px', height:"70px"}}></input><br></br>
              <input type="text" id="password" name="pswd" placeholder='Enter your Password' style={{ width: '200px', marginBottom: '10px', height:"70px" }}></input><br></br>
            </div>
            
            <div>
              <a href="/about"><button type="submit" style={{ width: '200px', height: '40px' }}>Create Account</button></a>
           
            </div>
            <div>
              <a href="/signin" style={{ fontSize: '25px' }}>Already have an account? Login</a>
            </div>
          </div>
        </center>
      </div>
    </center>
  </div></center>

    
  );
};

export default SignIn;
