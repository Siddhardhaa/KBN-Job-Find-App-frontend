import React, { Component } from 'react'
import * as ReactBootstrap from "react-bootstrap";
export default class Search extends Component {
    state={
        work:'Full-time',
        location:'Remote'
    }
    handleChange=(e)=>{
        this.setState({
        [e.target.name]:e.target.value
        })
    }   
     
  render() {
    const searchBar={
        backgroundColor: "#fff",
        boxShadow:"0px 1px 5px rgba(0,0,0,0.4)",
        borderRadius:"5px",
        marginTop:"-35px"
    };
    return (
      <div>
            <ReactBootstrap.Container style={searchBar} className='p-4 mb-3' >
                <ReactBootstrap.Row>
                    <ReactBootstrap.Col className='p-2'>
                        <select name="work" value={this.state.work} className='w-100 h-100 p-2'onChange={this.handleChange} >
                            <option value="Full-time">Full-Time</option>
                            <option value="Part-Time">Part-Time</option>
                            <option value="Contract">Contract</option>
                        </select>
                    </ReactBootstrap.Col>
                    <ReactBootstrap.Col className='p-2'>
                        <select name="location" value={this.state.location} className='w-100 h-100 p-2' onChange={this.handleChange} >
                            <option value="Remote">Remote</option>
                            <option value="In-Office">In-Office</option>
                        </select>
                    </ReactBootstrap.Col>
                    <ReactBootstrap.Col className='p-2'>
                        <ReactBootstrap.Button onClick={()=>this.props.jobSearch(this.state)} className='w-100 ' variant="info">Search</ReactBootstrap.Button>
                    </ReactBootstrap.Col>
                </ReactBootstrap.Row>
            </ReactBootstrap.Container>
      </div>
    )
  }
}
