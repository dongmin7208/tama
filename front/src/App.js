import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import React, { useState, useEffect } from 'react';
import Home from './pages/Home'
// const response = axios.ge('http://localhost:3001', {
//   headers: {
//     'x-access-token': localStorage.getItem('token'),
//   }
// })

export const TodoStateContext = React.createContext();

function App() {
  return (
    <Home />
  )
}

export default App;
