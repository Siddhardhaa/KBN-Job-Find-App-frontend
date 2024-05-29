import React, { Component } from 'react';
import * as ReactBootstrap from 'react-bootstrap';

export default class ViewJobModal extends Component {
  render() {
    const date = this.props.job.createdAt;
    return (
      <div className="App p-4">
        <ReactBootstrap.Modal centered backdrop="static" show={this.props.show} onHide={this.props.closeModal}>
          <ReactBootstrap.Modal.Header closeButton style={{ border: 'none' }}>
            <ReactBootstrap.Modal.Title>{this.props.job.title} @ {this.props.job.name}</ReactBootstrap.Modal.Title>
          </ReactBootstrap.Modal.Header>

          <ReactBootstrap.Modal.Body>
            <ReactBootstrap.Container>
              <ReactBootstrap.Row>
                <ReactBootstrap.Col>
                  <p>Posted on: {date}</p>
                </ReactBootstrap.Col>
              </ReactBootstrap.Row>
              <ReactBootstrap.Row>
                <ReactBootstrap.Col>
                  <p>Job type: {this.props.job.work}</p>
                </ReactBootstrap.Col>
              </ReactBootstrap.Row>
              <ReactBootstrap.Row>
                <ReactBootstrap.Col>
                  <p>Job location: {this.props.job.location}</p>
                </ReactBootstrap.Col>
              </ReactBootstrap.Row>
              <ReactBootstrap.Row>
                <ReactBootstrap.Col>
                  <p>Job description: {this.props.job.des}</p>
                </ReactBootstrap.Col>
              </ReactBootstrap.Row>
              <ReactBootstrap.Row>
                <ReactBootstrap.Col>
                  <p>Company name: {this.props.job.name}</p>
                </ReactBootstrap.Col>
              </ReactBootstrap.Row>
              <ReactBootstrap.Row>
                <ReactBootstrap.Col>
                  <p>Company website: {this.props.job.url}</p>
                </ReactBootstrap.Col>
              </ReactBootstrap.Row>
              <ReactBootstrap.Row>
                <ReactBootstrap.Col>
                  <p>Skills:</p>
                  <div className="d-flex flex-wrap">
                    {this.props.job.skills.map((sk) => (
                      <span className="badge bg-secondary me-2 mb-2" key={sk}>{sk}</span>
                    ))}
                  </div>
                </ReactBootstrap.Col>
              </ReactBootstrap.Row>
            </ReactBootstrap.Container>
          </ReactBootstrap.Modal.Body>

          <ReactBootstrap.Modal.Footer style={{ border: 'none' }} className='text-end'>
            <ReactBootstrap.Button href={this.props.job.link} target='_blank' variant="outline-dark">Apply</ReactBootstrap.Button>
          </ReactBootstrap.Modal.Footer>
        </ReactBootstrap.Modal>
      </div>
    );
  }
}
