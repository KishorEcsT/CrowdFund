
import './App.css';
import React,{useState} from 'react';

function App() {

  const[amount, setamount]= useState('')

  const handlesubmit = (e) =>{
    e.preventDefault();
    if(amount===""){
      alert("Please enter amount");
    } else{
      var options = {
        key: "rzp_test_PwL5pfL7zNJHag",
        key_secret: "nFV1TQBzMq9sKWNoXC4kxl4H",
        amount: amount * 100,
        currency: 'INR',
        name:"Crowd Fund PROJECT",
        description:"for testing",
        handler: function(response){
          alert(response.razorpay_payment_id);
        },
        prefill: {
          name:"KISHOR",
          email:"kishore8786@gmail.com",
          contact: "9566813433"
        },
        notes:{
          address: "Razorpay Corporate office"
        },
        theme: {
          color: "#3399cc"
        }
      };
      var pay = new window.Razorpay(options);
      pay.open();
    }
  }
  return (
    
    <div className="App">
      <h2>Razorpay | Payment</h2>
      <br/>
      <input type='text' placeholder='Enter Amount' value={amount} onChange={(e)=> setamount(e.target.value)}/>
      <br/><br/>

      <button onClick={handlesubmit}>Submit</button>
    </div>
    
    
  );
}

export default App;
