import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import React, { useState, useEffect } from 'react';
import Home from './pages/Home'
import TodoEditor from './components/TodoEditor'
// const response = axios.ge('http://localhost:3001', {
//   headers: {
//     'x-access-token': localStorage.getItem('token'),
//   }
// })

export const TodoStateContext = React.createContext();
export const TodoDispatchContext = React.createContext();

function App() {
  const todoCreate = (content) => {
    // content
  }
  return (
    <>
      <Home />
      <TodoEditor value={todoCreate} />
    </>
  )
}

export default App;
