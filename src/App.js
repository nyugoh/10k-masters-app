import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import IndexPage from './pages/Index';
import Login from './pages/Login';
import Register from './pages/Register';
import Skills from "./pages/Skills";
import Menu from './menus/main';
import Footer from './menus/footer';
import { fetch } from './actions/skill';
import Store from './store';
Store.dispatch(fetch());

class App extends Component {
  render() {
    return (
      <div className="ui container padded">
		  <div className="main-menu"><Menu/></div>
		  <hr/>
		  <Switch>
			  <Route path={'/'} exact component={IndexPage}/>
			  <Route path={'/skills'} component={Skills}/>
				<Route path={'/login'} exact component={Login}/>
			  <Route path={'/register'} exact component={Register}/>
		  </Switch>
		  <Footer/>
      </div>
    );
  }
}

export default App;
