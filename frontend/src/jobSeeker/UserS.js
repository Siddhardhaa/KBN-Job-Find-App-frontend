import React, { Component } from 'react'
import axios from 'axios'
import Header from './Header'
import Search from './Search'
import JobCard from './job/JobCard'
import ViewJobModal from './job/ViewJobModal'
import * as ReactBootstrap from "react-bootstrap";
const url=process.env.REACT_APP_BACKEND_URI_AUTH;
export default class UserS extends Component {
  state={
    show:false,
    show2:false,
    jobs:[],
    jobs2:[],
    viewJob:{skills:[]},
    search:false
  }
  componentDidMount=()=>this.fetch()
  fetch=()=>{
    
    axios.get(`${url}/jobs`)
    .then((res)=>{
      const SortOrder = res.data.sort((a, b) =>     a.createdAt > b.createdAt ? -1 : 1,);
        this.setState({
            jobs:SortOrder,
            jobs2:SortOrder
          
        })
    }) 
}
  jobSearch=(search)=>{
    this.setState({search:true})
      const filteredData = this.state.jobs2.filter(job => {
        return job.work === search.work && job.location === search.location;
      });
      this.setState({
        jobs: filteredData
      });
    
  }
  fetch2=()=>{
    
    this.setState({search:false,jobs:this.state.jobs2})
  }
  render() {
    return (
      <div>
        <Header/>
        <Search jobSearch={this.jobSearch}/>
       {this.state.search && <ReactBootstrap.Container className='mb-3 text-end'>
          <ReactBootstrap.Row>
            <ReactBootstrap.Col>
            <ReactBootstrap.Button onClick={this.fetch2} variant='outline-dark'> X Close Search</ReactBootstrap.Button>
            </ReactBootstrap.Col>
          </ReactBootstrap.Row>
        </ReactBootstrap.Container>}
        {
             this.state.jobs.map((job)=>(
        <JobCard key={job.name} {...job} openModal={()=> this.setState({viewJob:job,show:true})}
        />
        ))}
        <ViewJobModal openModal={()=> this.setState({show2:true})} closeModal={()=> this.setState({show:false})} 
        show={this.state.show}
        job={this.state.viewJob}
        />
    </div>
    )
  }
}
