import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import '../App.css';

function Home(){
  const navigate = useNavigate();
  function handleSubmit(event){
    event.preventDefault();
    if(!event.target.userEmail.value && !event.target.userPassword.value) return;
    const data = {
      email: event.target.userEmail.value,
      password: event.target.userPassword.value
    };
    axios.post('http://localhost:9000/login', data).then((res) => {
      if(res.data.message !== 'Authorized'){
        alert('Wrong email or password');
        return;
      }

      alert('User successfully logged-in');
      document.cookie = "Authorization="+ res.data.token;
      navigate('/dashboard');

    }).catch((error) => {
      console.log(error);
    });
  }
    return (
        <div className="App">
          <div className="mainDiv">
            <div className="infoDiv">
              <p className="titleText">Login page</p>
              <p className="descText">This page was built using the MERN stack!</p>
            </div>
            <div className="loginForm">
              <p className="loginTitle">Login to the dashboard</p>
              <p className="loginText">To access the dashboard, login is required.</p>
              <form onSubmit={handleSubmit} className="loginForm">
                <input className="credInput" placeholder="Email address" name="userEmail" type="email"></input>
                <input className="credInput" placeholder="Password" name="userPassword" type="password"></input>
                <button className="loginButton">Log in</button>
              </form>
              <p className="createuserText" onClick={ () => navigate('/register') }>Create an account</p>
            </div>
          </div>
        </div>
    );
}

export default Home;
