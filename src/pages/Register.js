import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import '../style/register.css';

function Register(){

  const navigate = useNavigate();

  function handleSubmit(event){
    event.preventDefault();
    if(!event.target.userEmail.value || !event.target.userPassword.value || !event.target.userName.value) return;
    const data = {
      name: event.target.userName.value,
      email: event.target.userEmail.value,
      password: event.target.userPassword.value
    };

    axios.post('http://localhost:9000/register', data).then((res) => {
      if(res.data.status !== 'Successful' || !res.data.status){
        alert('This email is already in use!');
        return;
      }
      alert('User successfully created!');

    }).catch((error) => {
      console.log(error);
    });
  }

    return(
        <div className="App">
          <div className="mainDiv">
            <div className="loginForm">
              <p className="loginTitle">Create an account</p>
              <p className="loginText">Fill the fields bellow to create your account.</p>
              <form onSubmit={ handleSubmit } className="registerForm">
                <input name="userName" className="credInput" placeholder="Name" type="text"></input>
                <input name="userEmail" className="credInput" placeholder="Email address" type="email"></input>
                <input name="userPassword" className="credInput" placeholder="Password" type="password"></input>
                <button className="loginButton">Register</button>
              </form>
              <p className="createuserText" onClick={ () => navigate('/') }>Already have an account? Log in!</p>
            </div>
          </div>
        </div>
    );
}

export default Register;
