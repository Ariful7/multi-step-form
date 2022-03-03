import React, { useState } from 'react';
import FirstStep from '../components/FirstStep';
import SecondStep from '../components/SecondStep';
import ThirdStep from '../components/ThirdStep';
import Header from '../components/Header';
import {BrowserRouter as Router,Routes,Route, Navigate} from "react-router-dom";
import Login from '../components/Login';
import User from '../components/User';


const AppRouter = () => {
    const [user, setUser] = useState({});

    const updateUser = (data) => {
        setUser((prevUser) => ({ ...prevUser, ...data }));
    };

    const resetUser = () => {
        setUser({});
    };
    return (
        
        <Router>
            <div className="container">
            <Header />
            <Routes>
                <Route path="/" element={<FirstStep user={user} updateUser={updateUser} /> } />
                <Route path="/SecondStep" element={<SecondStep user={user} updateUser={updateUser} />} />
                <Route path="/ThirdStep" element={<ThirdStep user={user} updateUser={updateUser} resetUser={resetUser} />} />
                <Route path="/login" element={<Login /> } />
                <Route path="/users" element={<User /> } />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
            </div>
        </Router>
    );
  }
  
export default AppRouter;