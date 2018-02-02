import React, { Component } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'
import MainLayout from './components/layouts/MainLayout';
import { Router, Route, IndexRoute, browserHistory } from "react-router";
import Dashboard from './components/page/Dashboard';
import PageWrapper from './components/page/PageWrapper';
import CarA from './components/page/CarA';
import CarD from './components/page/CarD';
import SesdrA from './components/page/SesdrA';
import SesdrD from './components/page/SesdrD';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';

const App = () => (
  <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
  <Router history={browserHistory}>
      <Route path="/" component={PageWrapper}>
      <IndexRoute component={Dashboard}></IndexRoute>
      <Route path="dashboard" name="dashboard" component={Dashboard}></Route>
      <Route path="carA" name="carA" component={CarA}></Route>
      <Route path="carD" name="carD" component={CarD}></Route>
      <Route path="sesdrA" name="sesdrA" component={SesdrA}></Route>
      <Route path="sesdrD" name="sesdrD" component={SesdrD}></Route>
     </Route>
   </Router>
  </MuiThemeProvider>
);

export default App;
