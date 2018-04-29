import React, {Component} from "react";
import { Link } from 'react-router-dom';
import { Form, Segment, Button, Message } from 'semantic-ui-react';

class LoginForm extends Component {
	state = {
		data:{},
		errors: this.props.errors,
		loading: false
	};

	submit = ()=> {
		this.setState({ loading: true });
		this.props.submit(this.state.data);
	};

	handleChange  = (e)=> {
		this.setState({ data : { ...this.state.data, [e.target.name]: e.target.value } });
	};

	render() {
		const { loading } = this.state;
		return<Segment>
			<Form onSubmit={this.submit} loading={loading}>
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
								type='password'
								label='Password'
								placeholder='Password...'
					/>
				</Form.Field>
				{this.props.errors && <Message error>
				<p>Incorrect email or password.</p>
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
