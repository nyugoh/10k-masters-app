import React, {Component} from "react";
import { Switch, Route } from 'react-router-dom';
import Edit from '../skills/edit';
import Index from '../skills/list';
import Add from '../skills/add';

class Skills extends Component {
	render() {
		return (
      <Switch>
        <Route path='/' exact component={Index}/>
        <Route path='/skills/add' component={Add}/>
        <Route path='/skills/list' component={Index}/>
        <Route path='/skills/:id/edit' component={Edit}/>
      </Switch>
		);
	}
}

export default Skills;
