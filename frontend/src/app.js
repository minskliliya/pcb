
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import MainLayout from './components/layouts/MainLayout';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import 'normalize.css/normalize.css';
import './style/styles.scss';  

const App = () => (
  <MuiThemeProvider>
    <MainLayout />
  </MuiThemeProvider>
);

ReactDOM.render(<App />, document.getElementById('app'))
