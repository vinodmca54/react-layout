import React, { Component } from "react";
import { Route, Switch ,BrowserRouter} from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import indexRoutes from '../src/routes';

import PatientProvider from "./contexts/PatientRecordContext";

class App extends Component {
  render() {
    return (
      <PatientProvider>
        <BrowserRouter>
          <Switch>
            {indexRoutes.map((prop, key) => {
              return (
                <Route path={prop.path} component={prop.component} key={key} />
              );
            })}
          </Switch>
        </BrowserRouter>
      </PatientProvider>
    );
  }
}

export default App;
