import React, {useState}  from 'react';

const Shipment = () => {
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [address,setAddress]=useState('');
    const [phone,setPhone]=useState('');
    const [error,setError]=useState('');
    // const navigate =useNavigate('')


    const handelNameBlur =(event)=>{
        setName(event.target.value)
}

const handelEmailBlur = event =>{
    setEmail(event.target.value)
}
const handelAddressBlur = event =>{
    setAddress(event.target.value)
}

const handelPhoneBlur = event =>{
    setPhone(event.target.value)
}
    
const handelCreateUser = event =>{
    event.preventDefault();
   
}

    return (
        <div className="from-container">
        <div className="div">
          <h2 className="loginTitle">Shipping Information </h2>
          <form onSubmit={handelCreateUser} >
            <div className="input-group">
              <label htmlFor="text">Your Name</label>
              <input onBlur={handelNameBlur} type="Text" required />
            </div>
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input onBlur={handelEmailBlur} type="email" required />
            </div>
            <div className="input-group">
              <label htmlFor="address">Address</label>
              <input onBlur={handelAddressBlur} type="text" name="address" required />
            </div>
            <div className="input-group">
              <label htmlFor="phone">Your phone number</label>
              <input onBlur={handelPhoneBlur} type="tel" name="phone" required />
            </div>
            <p style={{color:'red'}}> {error}</p>
            <input className="submit-btn" type="submit" value="Add Shipping" />
          </form>
        </div>
      </div>
    );
};

export default Shipment;