import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Route, Switch } from "react-router-dom";
import Registration from "../Registration/Registration";
import PatientList from "../../components/PatientRecordList/PatientList";
import  HistoryFinding from '../../components/HistoryFindings/HistoryFinding';
import Home from "../Home/Home";

const appRoutes = [
  {
    path: "/register",
    component: Registration
  },
  {
    path: "/getRecord",
    component: PatientList
  },
  {
    path: "/home",
    component: Home
  },
  {
    path: "/:id/history-finding",
    component: HistoryFinding
  },
  { redirect: true, path: "/", to: "/" }
];
class Layout extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Header />
        <div className="Main">
          <Switch>
            {appRoutes.map((prop, key) => {
              return (
                <Route path={prop.path} component={prop.component} key={key} />
              );
            })}
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Layout;
