import React, { Component } from 'react'
import * as ReactBootstrap from "react-bootstrap";
import axios from 'axios';
const url=process.env.REACT_APP_BACKEND_URI_AUTH;
export default class NewJobModal extends Component {
    state={
        skills2: ["Javascript","React","Docker","Node","MongoDB","Express","SQL","C++","JAVA","MS OFFICE","Communication Skills","DSA","SAP","Cloud Computing","AWS","AZURE","GCP"],
        title:'',
        work:'Full-time',
        name:'',
        url:'',
        location:'Remote',
        link:'',
        des:'',
        skills:[],
        userId:'',
        included:'included',
        postMessage:''
    }
    handleChange=(e)=>{
      this.setState({
      [e.target.name]:e.target.value
      })
  }   
    addRemoveSkills=(skill)=>{
      this.state.skills.includes(skill) ? this.setState({skills:this.state.skills.filter((s)=>s !== skill)}) :
      this.setState({skills:this.state.skills.concat(skill)})
    }
    send=(e)=>{
      e.preventDefault();
     axios.post(`${url}/store`,
    {
      title: this.state.title,
      work: this.state.work,
      name: this.state.name,
      url: this.state.url,
      location: this.state.location,
      link: this.state.link,
      des: this.state.des,
      skills: this.state.skills,
      userId:localStorage.getItem('user')
     }).then(() => {
      this.setState({ postMessage: 'Job posted successfully!' });
      console.log('Job posted successfully!')
      this.props.fetch()
      this.setState({
        title:'',
        work:'Full-time',
        name:'',
        url:'',
        location:'Remote',
        link:'',
        des:'',
        skills:[]
      })
      const interval = setInterval(() => {
        this.setState({postMessage:''})
      }, 1500);
      return () => clearInterval(interval);
    })
    .catch(err => {
      this.setState({ postMessage: 'Failed to post the job.' });
      console.log('Job not posted successfully!')
    });
  }
  render() {
    return (
        
        <div className="App p-4">
            <ReactBootstrap.Modal centered backdrop="static" show={this.props.show} onHide={this.props.closeJobModal}>
             <form method="POST" onSubmit={this.send}>
                <ReactBootstrap.Modal.Header closeButton style={{border:"none"}}>
                    <ReactBootstrap.Modal.Title>Post Job</ReactBootstrap.Modal.Title>
                </ReactBootstrap.Modal.Header>

                <ReactBootstrap.Modal.Body> 
                    <ReactBootstrap.Container>
                      <ReactBootstrap.Row className='mb-2'>
                        <ReactBootstrap.Col>
                        <ReactBootstrap.Form.Control value={this.state.title} required name="title" onChange={this.handleChange} type="text" placeholder="Job tittle *" />
                        </ReactBootstrap.Col>
                        <ReactBootstrap.Col>
                        <select name="work" value={this.state.work} className='w-100 p-2' onChange={this.handleChange} >
                            <option value="Full-Time">Full-Time</option>
                            <option value="Part-Time">Part-Time</option>
                            <option value="Contract">Contract</option>
                        </select>
                        </ReactBootstrap.Col>
                      </ReactBootstrap.Row >
                      <ReactBootstrap.Row className='mb-2'>
                        <ReactBootstrap.Col>
                        <ReactBootstrap.Form.Control required value={this.state.name} name='name' onChange={this.handleChange} type="text" placeholder="Company name *" />
                        </ReactBootstrap.Col>
                        <ReactBootstrap.Col>
                        <ReactBootstrap.Form.Control required value={this.state.url} name='url' onChange={this.handleChange} type="text" placeholder="Company URL *" />
                         </ReactBootstrap.Col>
                      </ReactBootstrap.Row>
                      <ReactBootstrap.Row className='mb-2'>
                        <ReactBootstrap.Col>
                        <select name="location" value={this.state.location} onChange={this.handleChange} className='w-100  p-2' >
                            <option value="Remote">Remote</option>
                            <option value="In-Office">In-Office</option>
                        </select>
                        </ReactBootstrap.Col>
                        <ReactBootstrap.Col>
                        <ReactBootstrap.Form.Control required value={this.state.link} name='link' onChange={this.handleChange} type="text" placeholder="Job link *" />
                       </ReactBootstrap.Col>
                      </ReactBootstrap.Row>
                      <ReactBootstrap.Row className='mb-2'>
                        <ReactBootstrap.Col>
                        <ReactBootstrap.Form.Control required value={this.state.des} name='des' onChange={this.handleChange} as="textarea" rows={3} placeholder="Job description *"/>
                        </ReactBootstrap.Col>
                      </ReactBootstrap.Row>
                      <ReactBootstrap.Row className='mt-2'>
                        <p>Skills</p>
                      <ReactBootstrap.Col className='d-flex flex-wrap'>
                      {
                        this.state.skills2.map((sk) => (
                         <div key={sk} onClick={()=> this.addRemoveSkills(sk)} className={`skillChip sC ${this.state.skills.includes(sk) && this.state.included}`}>{sk}</div>
                        ))
                       }
                  </ReactBootstrap.Col>
                      </ReactBootstrap.Row>
                    </ReactBootstrap.Container>
                </ReactBootstrap.Modal.Body>

                <ReactBootstrap.Modal.Footer style={{border:"none"}} className='justify-content-between'>
                    <p className='text-danger'>*required</p>
                    {this.state.postMessage && <p className='text-info fw-bold'>{this.state.postMessage}</p>}
                    <ReactBootstrap.Button type='submit' variant="info">Post job</ReactBootstrap.Button>
                </ReactBootstrap.Modal.Footer>
                </form>
            </ReactBootstrap.Modal>
        </div>
    )
  }
}
