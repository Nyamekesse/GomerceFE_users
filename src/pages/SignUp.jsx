import React, {useState} from "react";
import  SignUp from "../components/SignUp";
import Signup from "../Assets/Images/Signup.png";

const Register = () => {
  const [user, setUser] = useState({name: "", email: "", password: "",})

  const handleChange = (e) => {
    setUser({...user, [e.target.name]:e.target.value})
    
  }
  

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(user)  //axios.post then console.log then 
    setUser({name: "", email: "", password: "",})
  }

  return  (
    <SignUp 
    titleText = "Create an Account"
    buttomText = "Let's get you started"
    isPassword = {true}
    buttonText = "CREATE ACCOUNT"
    linkText = "Log in"
    linkPath = "/login"
    image = {Signup}
    loading = {false}
    isCreateAccount = {true}
    linkMessage = "Already have an account? "
    signupStyle={true}
    />
  // <form onSubmit={handleSubmit}>
  //   <h2>Create User</h2>
  //   <input type="text" name="name" value={user.name}  placeholder=" Enter name" onChange={handleChange} />
  //   <input type="email" name="email" value={user.email} placeholder="Enter email" onChange={handleChange} />
  //   <input type="password" name="password" value={user.password} placeholder="Enter Password" onChange={handleChange} />
  //   <button type="submit">CreateAccount</button>
  // </form>
  )
};

export default Register;
