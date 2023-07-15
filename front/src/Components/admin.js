import React, { useContext, useState } from 'react';
import { AuthContext } from '../Assets/Context/auth';
import { Header } from './subcomponents/header';
import '../Assets/admin.css';

function Admin() {
    const { isLogged, username } = useContext(AuthContext);
    const [ postData, setPostData ] = useState({
        title: '',
        content: '',
    }); 
    const handlePostSubmit = async (e) => {
        e.preventDefault();

        const dataToSend = {
            ...postData,
            username: username,
        };
        try {
            const response = await fetch('http://localhost:5000/post-submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(dataToSend),
            });
            const data = await response.json();
            if (response.ok) {
                console.log('Data sent successfully!');
                console.log(data.message);
                window.location.href = '/admin';
            } else {
                console.log('Data sending failed!');
            }
        } catch (error) {
            console.log('Error sending data:', error);
        }
    }

    const handleChange = (e) => {
        setPostData({...postData, [e.target.name]: e.target.value});
    };
    return (
        <div>
          {isLogged ? (
              <div>
                 <Header/>
                 <div className="admin-page">
                      <h1 className="admin-page__title">Admin Page</h1>
                      <div className="admin-page__content">
                        <form onSubmit={handlePostSubmit} className="admin-form" method='post'>
                          <label htmlFor="title" className="admin-form__label">
                            Title
                          </label>
                          <input onChange={handleChange} name='title' type="text" id="title" className="admin-form__input" />

                          <label htmlFor="content" className="admin-form__label">
                            Content
                          </label>
                          <textarea onChange={handleChange} name='content' id="content" className="admin-form__textarea"></textarea>

                          <button type="submit" className="admin-form__submit-btn">
                            Publish
                          </button>
                        </form>
                      </div>
                    </div>  
              </div>
          ) : (
            <h1>You must be logged in to access this page.</h1>
          )}
        </div>
    );
}

export default Admin;

