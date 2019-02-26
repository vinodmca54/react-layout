import React from "react";
import { Tab, Tabs } from "react-bootstrap";
import "../Home/Home.css";
import HistoryFinding from "../../components/HistoryFindings/HistoryFinding";
import Investigation from "../../components/Investigations/Investigation";
import Discharge from "../../components/Discharge-Advice/Discharge-Advice";

class Home extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      id: props.match.params.id
    };
  }
  render() {
    const { id } = this.state;
    return (
      <Tabs
        id="controlled-tab-example"
        activeKey={this.state.key}
        onSelect={key => this.setState({ key })}
      >
        <Tab eventKey="home" title="History & Findings">
          <HistoryFinding id={id} />
        </Tab>
        <Tab eventKey="profile" title="Investigation">
          <Investigation />
        </Tab>
        <Tab eventKey="course" title="Course in the Hospital" />
        <Tab eventKey="discharge" title="Discharge and Advice">
          <Discharge />
        </Tab>
        <Tab eventKey="records" title="Retrive Records" />
      </Tabs>
    );
  }
}
export default Home;
