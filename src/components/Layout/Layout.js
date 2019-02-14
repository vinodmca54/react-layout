
import React, { Component } from 'react';
import  Header  from './Header';
import  Footer  from './Footer';
import {  Route, Switch } from "react-router-dom";
import Registration from '../Registration/Registration.js'

const appRoutes = [
  {
    path: "/registration",
    component: Registration
  },
  { redirect: true, path: "/", to: "/"}
];
class Layout extends React.Component {
  render() {
     return (
       <div>
      <Header></Header>
      <Switch>
      {appRoutes.map((prop, key) => {
        return <Route path={prop.path} component={prop.component} key={key} />;
      })}
    </Switch>
      <Footer></Footer>
      </div>
     );
  }
}
export default Layout;
