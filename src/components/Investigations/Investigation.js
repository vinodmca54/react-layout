import React, { Component } from "react";
import { Form, Button, Col, Card } from "react-bootstrap";
export default class Investigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      investigation: "",
      validated: false
    };
    this.patientId = null;
  }
  componentDidMount() {
    //this.patientId = this.props.match.params.id;
  }
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = async e => {
    const form = e.currentTarget;
    e.preventDefault();
    e.stopPropagation();
    this.setState({ validated: true });
    if (form.checkValidity()) {
      let response = await fetch("http://localhost:8081/api/history", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Origin": "*"
        },
        body: JSON.stringify(
          Object.assign({}, this.state, { patientId: this.patientId })
        )
      });
      const Json = await response.json();
    }
  };
  render() {
    const { validated } = this.state;
    return (
      <div className="form">
        <Card style={{ width: "48rem" }}>
          <Card.Body>
            <Card.Title>Investigation</Card.Title>
            <Form noValidate validated={validated} onSubmit={this.handleSubmit}>
              <Form.Group as={Col}>
                {/* <Form.Label>Investigation</Form.Label> */}
                <Form.Control
                  as="textarea"
                  rows="15"
                  value={this.state.investigation}
                  name="investigation"
                  onChange={this.handleChange}
                  required
                />
              </Form.Group>
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
