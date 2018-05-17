import React, {Component} from "react";
import { connect } from 'react-redux';
import LoginForm from "../forms/Login";
import { Grid, Message } from 'semantic-ui-react';
import { login } from '../actions/auth';

class Login extends Component {
	state = {
		errors: []
	};

	submit = data =>{
		this.props.login(data).then( () => {
			this.props.history.push('/skills/add')
		}).catch( error => {
			this.setState({ errors: error })
		});
	};

	render() {
		return (
			<div>
				<h2>Login Page</h2>
				<Grid>
					<Grid.Row columns='1' centered>
						<Grid.Column width='twelve'>
							<LoginForm submit={this.submit} errors={this.state.errors}/>
							{this.state.errors && <Message error>
                <Message.Header>Erorr loggin...</Message.Header>
                <p>Incorrect email/password</p>
              </Message>}
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</div>
		);
	}
}

export default connect(null, {login})(Login);
