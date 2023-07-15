import React, { useState } from 'react';
import './App.css';
import Home from './Components/home';
import Admin from './Components/admin';
import Regist from './Components/regist';
import Login from './Components/login';
import { AuthProvider } from './Assets/Context/auth';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
function App() {
      return (
        <AuthProvider> 
            <Router>
              <Routes>
                <Route exact path="/" element={<Home/>} /> 
                <Route path="/admin" element={<Admin/>}/>
                <Route path="/register" element={<Regist/>}/>
                <Route path="/login" element={<Login/>}/>
              </Routes>
            </Router>
        </AuthProvider>
      ); 
}

export default App;
