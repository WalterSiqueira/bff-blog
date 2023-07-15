import React, { useState, useContext } from 'react';
import '../Assets/login.css';
import {AuthContext} from '../Assets/Context/auth';
function Login(){
    const {login} = useContext(AuthContext);

    const [formData, setFormData] = useState({
        name: '',
        password: '',
    });
    const handleSubmit = async (e) => {
        e.preventDefault();

        try{
            const response = await fetch('http://localhost:5000/login-submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',

                },
                body: JSON.stringify(formData),
            });
            const data = await response.json();
            if (response.ok) {
                const {username} = formData;
                console.log('Data sent successfully!');
                console.log(data.message); 
                login(username);
                window.location.href = "/admin"
            }else {
                console.log("Data sending failed!");
            }
        } catch (error) {
           console.error('Error sending data:', error); 
        }
    };

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };
    return (
    <div className="login-page">
      <h1 className="login-page__title">Login Page</h1>
      <div className="login-page__content">
        <form onSubmit={handleSubmit} className="login-form">
          <label htmlFor="title" className="login-form__label">
            username 
          </label>
          <input onChange={handleChange} name='username' type="text" id="username" className="login-form__input" />

          <label htmlFor="content" className="login-form__label">
            password 
          </label>
          <input onChange={handleChange} name='password' type="password" id="password" className="login-form__textarea"/>

          <button type="submit" className="login-form__submit-btn">
            Submit 
          </button>
        </form>
      </div>
    </div> 
    );
}

export default Login;
