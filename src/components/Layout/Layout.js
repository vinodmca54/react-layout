
import React, { Component } from 'react';
import  Header  from './Header';
import  Footer  from './Footer';
import {  Route, Switch } from "react-router-dom";
import Registration from '../Registration/Registration'
import Home from '../Home/Home';

const appRoutes = [
  {
    path: "/register",
    component: Registration
  },
  {
    path:"/home",
    component:Home
  },
  { redirect: true, path: "/", to: "/"}
];
class Layout extends React.Component {
  render() {
     return (
       <div>
      <Header></Header>
      <div className="Main">
      <Switch>
      {appRoutes.map((prop, key) => {
        return <Route path={prop.path} component={prop.component} key={key} />;
      })}
    </Switch>
    </div>
      <Footer></Footer>
      </div>
    )
  }
}

export default Layout;
