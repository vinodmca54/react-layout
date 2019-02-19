import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import PatientProvider from "./contexts/PatientRecordContext";

class App extends Component {
  render() {
    return (
      <PatientProvider>
        <Router>
          <Switch>
            {indexRoutes.map((prop, key) => {
              return (
                <Route path={prop.path} component={prop.component} key={key} />
              );
            })}
          </Switch>
        </Router>
      </PatientProvider>
    );
  }
}

export default App;
