import React from "react";
import { Tab, Tabs } from "react-bootstrap";
import "../Home/Home.css";
import  HistoryFinding  from "../../components/HistoryFindings/HistoryFinding";

class Home extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      key: "home"
    };
  }
  render() {
    return (
      <Tabs
        id="controlled-tab-example"
        activeKey={this.state.key}
        onSelect={key => this.setState({ key })}
      >
        <Tab eventKey="home" title="History & Findings">
          <HistoryFinding />
        </Tab>
        <Tab eventKey="profile" title="Investigation" />
        <Tab eventKey="contact" title="Course in the Hospital" />
        <Tab eventKey="contact" title="Discharge and Advice" />
        <Tab eventKey="contact" title="Retrive Records" />
      </Tabs>
    );
  }
}
export default Home;
