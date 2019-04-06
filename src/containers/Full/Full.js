import React, { Component } from 'react';
import Header from '../../components/Header/';
import Sidebar from '../../components/Sidebar/';
import Footer from '../../components/Footer/';
class Full extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <div className="app-body">
            <Sidebar {...this.props}/>
            <main className="main">            
                {this.props.children}
                Full component
            </main>
        </div>
         <Footer />
      </div>
    );
  }
}
export default Full;
