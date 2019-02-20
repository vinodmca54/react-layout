import React, { Component } from "react";
import { Form, Button, Col, Card } from "react-bootstrap";
export default class HistoryFinding extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    // const { validated, success } = this.state;
    return (
      <div class="form">
        <Card style={{ width: "48rem" }}>
          <Card.Body>
            <Card.Title>History Findings</Card.Title>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows="3" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows="3" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows="3" />
            </Form.Group>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
