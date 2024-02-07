// SignOut.js
import React from 'react';

const LogIn = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px' }}>
      {/* Left side div with budgeting tips */}
      <div style={{ flex: '1', paddingRight: '20px', fontSize: '18px' }}>
        <center><h2 style={{ fontSize: '24px' }}>Budget Brain Tips on Saving!</h2></center>
        <p>
          <li style={{ fontWeight: "bold" }}>Set Clear Goals: Start by defining your financial goals, whether it's saving for a vacation, paying off debt, or building an emergency fund. Having specific objectives will give your budgeting efforts purpose and motivation.</li><br></br>
          <br></br>
          <li>Create a Realistic Budget: Design a budget that aligns with your income and financial goals. Be realistic about your expenses and allocate funds accordingly to necessities, savings, and discretionary spending.</li><br></br>
          <br></br>
          <li>Review and Adjust Regularly: Regularly review your budget to ensure it's still aligned with your financial goals and lifestyle. Adjustments may be necessary as your income or expenses change over time.</li><br></br>
          <br></br>
          <li>Stay Disciplined: Stick to your budgeting plan even when faced with temptation or unexpected challenges. Practice self-discipline and remind yourself of your financial goals to stay motivated.</li><br></br>
          <br></br>
          <li>Celebrate Milestones: Celebrate small victories along the way to keep yourself motivated and engaged with your budgeting efforts. Whether it's reaching a savings goal or paying off a debt, acknowledging your progress can boost morale and encourage continued consistency.</li><br></br>
          <br></br>
          <li>Stay Disciplined: Stick to your budgeting plan even when faced with temptation or unexpected challenges. Practice self-discipline and remind yourself of your financial goals to stay motivated.</li>
        </p>
      </div>
      
      {/* Right side login screen */}
      <div style={{ flex: '1', paddingLeft: '20px', fontSize: '18px' }}>
        <center>
          <div>
            <h2 style={{ fontSize: '38px' }}>Log In Page</h2>
            <p style={{ fontSize: '30px' }}>Log in to access your account.</p>
            
            <div style={{ marginBottom: '10px' }}>
              <input type="text" id="username" name="uname" placeholder='Enter your Username' style={{ width: '200px', marginBottom: '10px', height:"70px"}}></input><br></br>
              <input type="text" id="password" name="pswd" placeholder='Enter your Password' style={{ width: '200px', marginBottom: '10px', height:"70px" }}></input><br></br>
            </div>
            
            <div>
              <a href="/about"><button type="submit" style={{ width: '200px', height: '40px' }}>Login</button></a>
           
            </div>
            <div>
              <a href="/signin" style={{ fontSize: '25px' }}>Don't have an account? Signup!</a>
            </div>
          </div>
        </center>
      </div>
    </div>
  );
};

export default LogIn;
