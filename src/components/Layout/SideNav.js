import React, { Component } from "react";
import { Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { OverlayTrigger, Tooltip, Modal, Button } from "react-bootstrap";
import { Registration } from "../../components/Registration/Registration";
import { Link } from "react-router-dom";

export default class SideNav extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false
    };
  }
  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  async componentDidMount() {
    let response = await fetch("http://localhost:8081/api/registration", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Origin": "*"
      }
    });
    this.patientRecords = await response.json();
    this.setState({ records: this.patientRecords });
  }

  render() {
    const { records } = this.state;
    return (
      <div className="leftPanel">
        <Form noValidate>
          <Form.Group className="searchBox">
            <Form.Control
              required
              name="name"
              type="search"
              placeholder="Search..."
            />
            <OverlayTrigger
              overlay={
                <Tooltip id="tooltip-disabled">Register Patient</Tooltip>
              }
            >
              <span className="d-inline-block">
                <FontAwesomeIcon
                  icon={["fas", "user-plus"]}
                  onClick={this.handleShow}
                />
              </span>
            </OverlayTrigger>
            <Modal
              size="lg"
              show={this.state.show}
              onHide={this.handleClose}
              centered
            >
              <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                  Patient Registration
                </Modal.Title>
              </Modal.Header>
              <Registration />
              <Modal.Body />
            </Modal>
          </Form.Group>
        </Form>

        <div className="search-list">
          {records &&
            records.map((record, key) => {
              return (
                <Link key={key} to={`home/${record._id}`}>
                  {record.name}
                </Link>
              );
            })}
        </div>
      </div>
    );
  }
}
