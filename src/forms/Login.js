import React, {Component} from "react";
import { Link } from 'react-router-dom';
import { Form, Segment, Button, Message } from 'semantic-ui-react';

class LoginForm extends Component {
	state = {
		data:{},
		errors: {},
		loading: false
	};

	submit = ()=> {
		if (this.state.data.confirmed)
			this.props.submit(this.state.data);
		else {
			console.log('error');
			this.setState({ errors: { ...this.state.errors, confirmed: 'Confirm the details provided.' } });
		}
	};

	handleChange  = (e)=> {
		this.setState({ data : { ...this.state.data, [e.target.name]: e.target.value } });
	};

	render() {
		const { errors } = this.state;
		return<Segment>
			<Form onSubmit={this.submit}>
				<Form.Field>
					<Form.Input fluid required
								name='email'
								onChange={this.handleChange}
								label='Email'
								placeholder='Email...'
					/>
				</Form.Field>
				<Form.Field>
					<Form.Input fluid required
								name='password'
								onChange={this.handleChange}
								label='Password'
								placeholder='Password...'
					/>
				</Form.Field>
				{errors && <Message error>
					<Message.Header>Errors</Message.Header>
					<Message.Content>
						errors.forEach(error => {
						<p>error.message</p>
					})
					</Message.Content>
				</Message>}
				<Button className='instagram' fluid type='submit'>LOGIN</Button>
				<p style={pStyles}>
					<span>or</span><br/>
					<Link to='/register'>Create account</Link>
				</p>
			</Form>
		</Segment>;
	}
}

const pStyles = {
	textAlign: 'center'
};
export default LoginForm;
