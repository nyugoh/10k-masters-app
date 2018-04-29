import React, { Component } from 'react';
import Menu from './menus/main';
import Footer from './menus/footer';


class App extends Component {
  render() {
    return (
      <div className="ui container padded">
       <div className="main-menu"> <Menu/></div>
		  <hr/>
        <h2>10k Masters App</h2>

        <Footer/>
      </div>
    );
  }
}

export default App;
