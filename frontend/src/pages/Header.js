import React, { Component } from 'react'
import * as ReactBootstrap from "react-bootstrap"; 
export default class Header extends Component {
  render() {
    return (
        <div>
          
             <ReactBootstrap.Container fluid style={{backgroundColor:"black"}} className='p-5'>
              <ReactBootstrap.Row className='p-3'>
                <ReactBootstrap.Col className='d-flex flex-wrap justify-content-between'>
                <h1 style={{color:"white"}} className='ms-5'>Job Finder</h1>
                 </ReactBootstrap.Col>
              </ReactBootstrap.Row>
            </ReactBootstrap.Container>
            
        </div>
    )
  }
}
