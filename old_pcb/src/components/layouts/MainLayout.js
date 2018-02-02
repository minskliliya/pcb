import React from 'react';
import Header from '../page/Header';
import PageWrapper from '../page/PageWrapper'
import Footer from '../page/Footer'
import { Link } from "react-router";

export default class MainLayout extends React.Component {
  render () {
    return (
     <div >
       <Header />
       <PageWrapper />
       <Footer/>
    </div>
    );
  }
 }
