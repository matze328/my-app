import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import NavigationBar from './components/layout/navbar/Navigationbar';
import Impressum from "./components/pages/impressum/Impressum"
import SignUp from './components/pages/signUp'; 
import ToDos from './components/pages/todos';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <NavigationBar />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/Impressum" element={<Impressum />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/ToDos" element={<ToDos />} />
    </Routes>
    
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
