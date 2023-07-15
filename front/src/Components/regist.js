import React, { useState } from 'react';
import '../Assets/regist.css';

function Regist(){
    const [formData, setFormData] = useState({
        name: '',
        password: '',
    });
    const handleSubmit = async (e) => {
        e.preventDefault();

        try{
            const response = await fetch('http://localhost:5000/submit-registration', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',

                },
                body: JSON.stringify(formData),
            });
            const data = await response.json();
            if (response.ok) {
                console.log('Data sent successfully!');
                if (data.message == 'refused: taken username') {
                    alert("username alredy taken please try again!")
                } else {
                    window.location.href = "/login"
                }
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
    <div className="regist-page">
      <h1 className="regist-page__title">Registration Page</h1>
      <div className="regist-page__content">
        <form onSubmit={handleSubmit} className="regist-form">
          <label htmlFor="title" className="regist-form__label">
            username 
          </label>
          <input onChange={handleChange} name='username'type="text" id="username" className="regist-form__input" />

          <label htmlFor="content" className="regist-form__label">
            password 
          </label>
          <input onChange={handleChange} name='password' type="password" id="password" className="regist-form__textarea"/>

          <button type="submit" className="regist-form__submit-btn">
            Submit 
          </button>
        </form>
      </div>
    </div> 
  );
}

export default Regist;
