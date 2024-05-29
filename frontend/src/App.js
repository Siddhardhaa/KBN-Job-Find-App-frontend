import React, { Component } from 'react'
import {BrowserRouter, Routes,Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import UserP from './jobPoster/UserP'
import UserS from './jobSeeker/UserS'
import Login from './pages/Login'
import Register from './pages/Register'
export default class App extends Component {
   renderList=()=>{
    // const url = process.env.REACT_APP_BACKEND_URI_AUTH;
    // // console.log(url);
    if(localStorage.getItem('token') && localStorage.getItem('user')){
 
      return[
        
        <Route path='/' element={<UserP/>}/>,
        <Route path='*' element={<UserP/>}/>
        
      ]
    }
    else if(localStorage.getItem('token')){
      return[
        
        <Route path='/' element={<UserS/>}/>,
        <Route path='*' element={<UserS/>}/>
        
      ]
    }
    else{return[
      <Route path='/' element={<Login/>}/>,
        <Route path='/Signup' element={<Register/>}/>,
        <Route path='*' element={<Login/>}/>
      ]
    }
   }
  render() {
  return (
    <div>
      <BrowserRouter>
        <Routes>        
              {this.renderList()}
         </Routes>
           </BrowserRouter>
    </div>
  )
}
}
