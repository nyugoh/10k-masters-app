import React, {Component} from "react";
import { connect } from 'react-redux';
import { Grid } from 'semantic-ui-react';
import RegisterForm from "../forms/Register";
import { register } from '../actions/auth';

class Register extends Component {
	submit = data => {
		this.props.register(data).then( ()=> this.props.history.push('/'));
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

export default connect(null, { register })(Register);
