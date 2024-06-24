import React,{useState} from 'react'
import axios from 'axios';
import { Link} from 'react-router-dom'
import * as ReactBootstrap from "react-bootstrap";
import Header from './Header';
export default function Login(props) {
   const url=process.env.REACT_APP_BACKEND_URI_AUTH;
    const [login, setlogin] = useState({ username: '', password: '',user: 'JobS' });
    const changeHandler = (e) => {
        setlogin({ ...login, [e.target.name]: e.target.value });
    }
    const submitHandler = (e) => {
        e.preventDefault();
        if(login.user==='JobS'){
        axios.post(`${url}/api/auth/loginS`, login).then(res => { localStorage.setItem('token', res.data.token);
        window.location.href='/' }).catch(err => alert(err.response.data));
        }
        if(login.user==='JobP'){
         axios.post(`${url}/api/auth/loginP`, login).then(res => { localStorage.setItem('token', res.data.token);
         localStorage.setItem('user',res.data.name);
         window.location.href='/' }).catch(err => alert(err.response.data));   
      }
      }
     
    return (
      
      <div>
        <Header/>
        <ReactBootstrap.Container className='login mt-3'>
            <ReactBootstrap.Row className='mb-5'>
                <ReactBootstrap.Col className='text-center'><h2>Sign In</h2></ReactBootstrap.Col>
            </ReactBootstrap.Row>
            <form onSubmit={submitHandler}>
            <ReactBootstrap.Row className='mb-2'>
            <ReactBootstrap.Col>
            <ReactBootstrap.Form.Control required name='username'  onChange={changeHandler} type="text" placeholder="Enter Username" />
         </ReactBootstrap.Col>
         </ReactBootstrap.Row>
         <ReactBootstrap.Row className='mb-2'>
            <ReactBootstrap.Col>
            <ReactBootstrap.Form.Control required type="password" name='password' onChange={changeHandler} placeholder='Enter Password'/>
            </ReactBootstrap.Col>
         </ReactBootstrap.Row>
         <ReactBootstrap.Row>
            <ReactBootstrap.Col>
         <ReactBootstrap.Form.Select name='user'  onChange={changeHandler}>
            <option value="JobS">Job Seeker</option>
            <option value="JobP">Job Poster</option>
        </ReactBootstrap.Form.Select>
        </ReactBootstrap.Col>
         </ReactBootstrap.Row>
         <ReactBootstrap.Row className='mt-5 mb-4'>
            <ReactBootstrap.Col className='text-center'>
            <ReactBootstrap.Button type='submit' variant='info'>Login</ReactBootstrap.Button>
            </ReactBootstrap.Col>
         </ReactBootstrap.Row>
         </form>
         <ReactBootstrap.Row>
         <ReactBootstrap.Col>
            <p>don't have an account ? <ReactBootstrap.Button size="sm" variant='outline-dark' ><Link to='/Signup' style={{textDecoration:"none"}}>Sign-Up</Link></ReactBootstrap.Button></p>
         </ReactBootstrap.Col>
         </ReactBootstrap.Row>
        </ReactBootstrap.Container>
                
      </div>
    )
    }


    
