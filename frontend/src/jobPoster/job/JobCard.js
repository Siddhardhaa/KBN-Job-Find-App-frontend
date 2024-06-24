import React, { Component } from 'react'
import axios from 'axios';
import * as ReactBootstrap from "react-bootstrap";
const url=process.env.REACT_APP_BACKEND_URI_AUTH;
export default class JobCard extends Component {

    deleteHandler = (id) => {
        axios.delete(`${url}/${id}`).then(res => window.location.reload(false));
    } 
  render() {
    const date = this.props.job.createdAt.substring(0, 10);
    return (
        
      <div>
        <ReactBootstrap.Container className='p-4 card' key={this.props.job.title}>
            <ReactBootstrap.Row className='justify-content-center align-items-center flex-wrap'>
                <ReactBootstrap.Col>
                    <p>{this.props.job.title}</p>
                    <p className='companyName'>{this.props.job.name}</p>
                </ReactBootstrap.Col>
                <ReactBootstrap.Col className='d-flex'>
                    { 
                        this.props.job.skills.map((sk)=>(
                                <div key={sk} className='skillChip'>{sk}</div> 
                        ))  
                    }
                </ReactBootstrap.Col>
                <ReactBootstrap.Col className='text-end'>
                    <p>{date}|{this.props.job.work}|{this.props.job.location}</p>
                     <ReactBootstrap.Button onClick={() => this.deleteHandler(this.props.job._id)} variant="outline-dark">Delete</ReactBootstrap.Button> 
                </ReactBootstrap.Col>
            </ReactBootstrap.Row>
        </ReactBootstrap.Container>
      </div>
                
    )
  }
}
