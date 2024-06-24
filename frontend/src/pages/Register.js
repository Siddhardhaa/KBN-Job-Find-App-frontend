import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import * as ReactBootstrap from "react-bootstrap";
import Header from './Header';
export default function Register() {
   const url=process.env.REACT_APP_BACKEND_URI_AUTH;
   // console.log(url);
   const navigate = useNavigate();
   const [register, setregister] = useState({ name: '', username: '', email: '', password: '',user: 'JobS' });
   const changeHandler = (e) => {
       setregister({ ...register, [e.target.name]: e.target.value });
   }
   const submitHandler = (e) => {
       e.preventDefault();
       if(register.user==='JobS'){
       axios.post(`${url}/api/auth/registerS`, register).then(res => { alert(res.data); navigate('/') }).catch(err => alert(err.response.data));
       }
       if(register.user==='JobP'){
         axios.post(`${url}/api/auth/registerP`, register).then(res => { alert(res.data); navigate('/') }).catch(err => alert(err.response.data));
         }
      }
    return (
      <div>
        <Header/>
        <ReactBootstrap.Container className='login mt-3'>
            <ReactBootstrap.Row className='mb-5'>
                <ReactBootstrap.Col className='text-center'><h2>Register</h2></ReactBootstrap.Col>
            </ReactBootstrap.Row>
            <form onSubmit={submitHandler}>
            <ReactBootstrap.Row className='mb-2'>
            <ReactBootstrap.Col>
            <ReactBootstrap.Form.Control name='name' required onChange={changeHandler} type="text" placeholder="Enter Fullname" />
         </ReactBootstrap.Col>
         </ReactBootstrap.Row>
            <ReactBootstrap.Row className='mb-2'>
            <ReactBootstrap.Col>
            <ReactBootstrap.Form.Control name='username' required onChange={changeHandler} type="text" placeholder="Enter Username" />
         </ReactBootstrap.Col>
         </ReactBootstrap.Row>
         <ReactBootstrap.Row className='mb-2'>
            <ReactBootstrap.Col>
            <ReactBootstrap.Form.Control name='email' required onChange={changeHandler} type="email" placeholder="Enter Email" />
         </ReactBootstrap.Col>
         </ReactBootstrap.Row>
         <ReactBootstrap.Row>
            <ReactBootstrap.Col>
         <ReactBootstrap.Form.Select className='mb-2' onChange={changeHandler} name='user'>
            <option value="JobS">Job Seeker</option>
            <option value="JobP">Job Poster</option>
        </ReactBootstrap.Form.Select>
        </ReactBootstrap.Col>
         </ReactBootstrap.Row>
         <ReactBootstrap.Row className='mb-2'>
            <ReactBootstrap.Col>
            <ReactBootstrap.Form.Control type="password" required onChange={changeHandler} name='password' placeholder='Enter Password'/>
            </ReactBootstrap.Col>
         </ReactBootstrap.Row>
        
         <ReactBootstrap.Row className='mt-5 mb-4'>
            <ReactBootstrap.Col className='text-center'>
            <ReactBootstrap.Button  variant='info' type='submit' >Sign Up</ReactBootstrap.Button>
            </ReactBootstrap.Col>
         </ReactBootstrap.Row>
         <ReactBootstrap.Row>
         <ReactBootstrap.Col>
            <p>Already have an account ? <ReactBootstrap.Button size="sm" variant="outline-dark"><Link style={{textDecoration:"none"}} to='/'>Sign-In</Link></ReactBootstrap.Button></p>
         </ReactBootstrap.Col>
         </ReactBootstrap.Row>
         </form>
        </ReactBootstrap.Container>
                
      </div>
    )
  }

