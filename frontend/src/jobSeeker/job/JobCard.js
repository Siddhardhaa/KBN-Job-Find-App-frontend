import React, { Component } from 'react'
import * as ReactBootstrap from "react-bootstrap";
export default class JobCard extends Component {
  render() {
    const date = this.props.createdAt.substring(0, 10);
    return (
      <div>
        <ReactBootstrap.Container style={{marginBottom:"0.1px"}} className='p-4 card' key={this.props.title}>
            <ReactBootstrap.Row className='justify-content-center align-items-center flex-wrap'>
                <ReactBootstrap.Col>
                    <p>{this.props.title}</p>
                    <p className='companyName'>{this.props.name}</p>
                </ReactBootstrap.Col>
                <ReactBootstrap.Col className='d-flex'>
                    { 
                        this.props.skills.map((sk)=>(
                                <div key={sk} className='skillChip'>{sk}</div> 
                        ))  
                    }
                </ReactBootstrap.Col>
                <ReactBootstrap.Col className='text-end'>
                    <p>{date}|{this.props.work}|{this.props.location}</p>
                    <ReactBootstrap.Button onClick={this.props.openModal} variant="outline-dark">Check</ReactBootstrap.Button>
                </ReactBootstrap.Col>
            </ReactBootstrap.Row>
        </ReactBootstrap.Container>
      </div>
    )
  }
}
