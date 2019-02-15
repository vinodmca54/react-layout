import React, { Component } from 'react';
import {Form,Button,Col,Card} from 'react-bootstrap';
import './Registration.css';

class Registration extends Component {
  constructor(...args) {
    super(...args);
    this.state = { name: '' ,age:'',validated: true };
  }

  handleSubmit=(event)=> {
    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();
    this.setState({ validated: true });
    console.log('====>',this.state);
  }
  handleChange =(event) =>{
    this.setState({ [event.target.name]: event.target.value });
    console.log(event);
  }

  render() {
    const { validated } = this.state;
    return (
      <div className="registration-form">
     <Card style={{ width: '48rem' }}>
     <Card.Body>  
     <Card.Title>Registration</Card.Title>
 <Form noValidate
        validated={validated}
        onSubmit={e => this.handleSubmit(e)}>
  <Form.Row>
    <Form.Group as={Col} controlId="formGridName">
      <Form.Label>Patient Name</Form.Label>
      <Form.Control required value={this.state.name} name="name" onChange={this.handleChange}   type="text" placeholder="Name" />
      <Form.Control.Feedback type="invalid">
                Please enter  Name.
      </Form.Control.Feedback>
    </Form.Group>
    <Form.Group as={Col} controlId="formGridAge">
      <Form.Label>Age</Form.Label>
      <Form.Control type="number" value={this.state.age} name="age"  onChange={this.handleChange} placeholder="Age" />
    </Form.Group>
  </Form.Row>
  <Form.Group controlId="formGridAddress">
    <Form.Label>Address</Form.Label>
    <Form.Control required placeholder="1234 Main St" />
  </Form.Group>
  <Form.Group controlId="formGridPhone">
    <Form.Label>Phone Number</Form.Label>
    <Form.Control required type="text" maxLength="10" placeholder="Phone Number" />
  </Form.Group>
  <Form.Group controlId="formGridUnitStaff">
    <Form.Label>Unit Staff</Form.Label>
    <Form.Control required type="text" maxLength="10" placeholder="Unit Staff" />
  </Form.Group>
  <Form.Group controlId="formGridUnitChief">
    <Form.Label>Unit Chief</Form.Label>
    <Form.Control type="text" maxLength="10" placeholder="Unit Chief" />
  </Form.Group>
  <Form.Row>
    <Form.Group as={Col} controlId="formGridMrNo">
      <Form.Label>MR.NO</Form.Label>
      <Form.Control  type="text" placeholder="MR.NO" />
    </Form.Group>
    <Form.Group as={Col} controlId="formGridPatId">
      <Form.Label>Pat.ID</Form.Label>
      <Form.Control type="number" placeholder="Pat.ID" />
    </Form.Group>
  </Form.Row>
  <Form.Row>
    <Form.Group as={Col} controlId="formGridAdmissionDate">
      <Form.Label>Admission Date</Form.Label>
      <Form.Control required type="date" placeholder="Date of Admission" />
    </Form.Group>
    <Form.Group as={Col} controlId="formGridDiscahrgeDate">
      <Form.Label>Discharge Date</Form.Label>
      <Form.Control  required type="date" placeholder="Discharge Date" />
    </Form.Group>
  </Form.Row>
  <Form.Row>
    <Form.Group as={Col} controlId="formGri dArrivalTime">
      <Form.Label>Time of Arrival</Form.Label>
      <Form.Control type="text" placeholder="Time of Arrival" />
    </Form.Group>
    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Bed No</Form.Label>
      <Form.Control type="text" placeholder="Bed No" />
    </Form.Group>
  </Form.Row>
  <Form.Row>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Blood Group</Form.Label>
      <Form.Control type="text" placeholder="Blood Group" />
    </Form.Group>
    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Cash/Cr Bill</Form.Label>
      <Form.Control type="text" placeholder="Cash/Cr" />
    </Form.Group>
  </Form.Row>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
</Card.Body>
</Card>
    </div>
    );
  }
}

export default Registration;
