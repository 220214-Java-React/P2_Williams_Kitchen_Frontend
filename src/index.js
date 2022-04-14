import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import{AuthProvider} from './AuthProvider';
import { BrowserRouter } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';
// import { BrowserRouter } from 'react-router-dom';
import LandingPage from './LandingPage';
import Login from './Login';
import Register from './Register';
import SubmitRecipe from './SubmitRecipe';


ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>} exact />
        <Route path="Submit" element={<SubmitRecipe/>} />
        <Route path="Login" element={<Login/>} />
        <Route path="Register" element={<Register/>} />

      </Routes>
      </BrowserRouter>
    </AuthProvider>    
  </React.StrictMode>,
  document.getElementById('root')
);
