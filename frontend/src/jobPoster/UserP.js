import React, { Component } from 'react'
import axios from 'axios'
import Header from './Header'
import JobCard from './job/JobCard'
import NewJobModal from './job/NewJobModal'
const url=process.env.REACT_APP_BACKEND_URI_AUTH;
console.log(url);
export default class UserP extends Component {
    state={
        show:false,
        jobs:[]
      }
      
    componentDidMount=()=>{this.fetch()}
    fetch=()=>{
          axios.get(`${url}/jobs`)
         .then((res) => {
          const SortOrder = res.data.sort((a, b) =>     a.createdAt > b.createdAt ? -1 : 1,);
           const filteredData = SortOrder.filter(job => {
             return job.userId === localStorage.getItem('user');
           });
           this.setState({
             jobs: filteredData
           });
         })
         .catch((error) => {
          return(error)
         });
       }
  render() {
     return (
      <div>
        <Header openJobModal={()=> this.setState({show:true})}/>
        <NewJobModal fetch={this.fetch}  closeJobModal={()=> this.setState({show:false})} show={this.state.show}/>
        
        {
            this.state.jobs.map((job)=>(
        <JobCard key={job.name} job={job}/>
              ))}
              
      </div>
    )
  }
}
