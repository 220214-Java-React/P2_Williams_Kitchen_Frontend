import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import{AuthProvider} from './AuthProvider';
import { BrowserRouter } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';

import LandingPage from './Components/LandingPage';
import Login from './Components/Login';
import Register from './Components/Register';
import SubmitRecipe from './Components/SubmitRecipe';
import RecipeUser from './Components/RecipeUser';


ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>} exact />
        <Route path="Submit" element={<SubmitRecipe/>} />
        <Route path="Login" element={<Login/>} />
        <Route path="Register" element={<Register/>} />
        <Route path="Recipe" element={<RecipeUser/>} />
      </Routes>
      </BrowserRouter>
    </AuthProvider>    
  </React.StrictMode>,
  document.getElementById('root')
);
