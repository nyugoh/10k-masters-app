import React, {Component} from "react";
import LoginForm from "../forms/Login";
import { Grid } from 'semantic-ui-react';

class Login extends Component {
	submit = data =>{
		console.log(data);
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

export default Login;
