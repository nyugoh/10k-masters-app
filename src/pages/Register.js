import React, {Component} from "react";
import { Grid } from 'semantic-ui-react';
import RegisterForm from "../forms/Register";

class Register extends Component {
	submit = data => {
		console.log(data);
	};

	render() {
		return (
			<div>
				<h2>Register to 10k Masters app</h2>
				<Grid>
					<Grid.Row columns='1' centered>
						<Grid.Column width='twelve'>
							<RegisterForm submit={this.submit}/>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</div>
		);
	}
}

export default Register;
