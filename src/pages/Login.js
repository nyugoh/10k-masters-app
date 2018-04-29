import React, {Component} from "react";
import { connect } from 'react-redux';
import LoginForm from "../forms/Login";
import { Grid } from 'semantic-ui-react';
import { login } from '../actions/login';

class Login extends Component {
	submit = data =>{
		this.props.login(data).then( () => { this.props.history.push('/skills') } );
	};

	render() {
		return (
			<div>
				<h2>Login Page</h2>
				<Grid>
					<Grid.Row columns='1' centered>
						<Grid.Column width='twelve'>
							<LoginForm submit={this.submit}/>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</div>
		);
	}
}

export default connect(null, {login})(Login);
