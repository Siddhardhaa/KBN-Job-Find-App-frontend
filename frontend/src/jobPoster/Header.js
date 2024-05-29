import React, { Component } from 'react'
import * as ReactBootstrap from "react-bootstrap";
export default class Header extends Component {
  endSession=()=>{
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    window.location.href = '/';
  }
  render() {
    return (
        <div>
             <ReactBootstrap.Container fluid style={{backgroundColor:"black"}} className='p-5'>
              <ReactBootstrap.Row className='p-3 justify-content-between'>
                <ReactBootstrap.Col>
                <h1 style={{color:"white"}} className='ms-5'>Job Finder</h1>
                </ReactBootstrap.Col>
                <ReactBootstrap.Col className='text-end'>
                <ReactBootstrap.Button onClick={this.endSession} variant="outline-info" className='me-2 mb text-nowrap'>Log Out</ReactBootstrap.Button>
             
                <ReactBootstrap.Button onClick={this.props.openJobModal} variant="info" className=' text-nowrap'>Post a Job</ReactBootstrap.Button>
                </ReactBootstrap.Col>
              </ReactBootstrap.Row>
            </ReactBootstrap.Container>
            <ReactBootstrap.Container>
            <h2 className='fw-bold pt-5'>Posted Jobs</h2>
            </ReactBootstrap.Container>
        </div>
    )
  }
}
