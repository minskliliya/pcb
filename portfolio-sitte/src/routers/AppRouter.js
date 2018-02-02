
import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import Header from '../components/Header';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';
import Home from '../components/Home';
import PortfolioItem from '../components/PortfolioItem';
import NotFoundPage from '../components/NotFoundPage';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header/ >
      <Switch>
        <Route path="/" component={Home} exact={true}/>
        <Route  path="/portfolio" component={Portfolio} exact={true}/>
        <Route  path="/portfolio/:id" component={PortfolioItem}/>
        <Route  path="/contact" component={Contact}/>
        <Route component={NotFoundPage}/>
      </Switch>  
    </div>  
  </BrowserRouter>
);

export default AppRouter;