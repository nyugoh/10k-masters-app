import React, {Component} from "react";
import { Link } from 'react-router-dom';
import { Form, Segment, Button, Message } from 'semantic-ui-react';

class RegisterForm extends Component {
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

	handleAgree  = (e, data)=> {
		this.setState({ data: { ...this.state.data, confirmed: data.checked } });
	};

	render() {
		const { errors } = this.state;
		return <Segment>
			<Form onSubmit={this.submit}>
				<Form.Group widths='equal'>
					<Form.Input fluid required
								label='First name'
								placeholder='First name'
								name='fname'
								onChange={this.handleChange}
					/>
					<Form.Input fluid required
								name='lname'
								onChange={this.handleChange}
								label='Last name'
								placeholder='Last name'
					/>
				</Form.Group>
				<Form.Group widths='equal'>
					<Form.Input fluid required
								name='email'
								onChange={this.handleChange}
								label='Email'
								placeholder='Email...'
					/>
					<Form.Input fluid required
								name='password'
								onChange={this.handleChange}
								label='Password'
								type='password'
								placeholder='Password...'
					/>
				</Form.Group>
				<Form.Checkbox
					name='agree'
					onChange={this.handleAgree}
					label='I agree to the Terms and Conditions'
				/>
				{errors && <Message error>
					<Message.Header>Errors</Message.Header>
					<Message.Content>
						errors.forEach(error => {
						<p>error.message</p>
					})
					</Message.Content>
				</Message>}
				<Button className='instagram' fluid type='submit'>REGISTER</Button>
				<p style={pStyles}>
					<span>or</span><br/>
					<Link to='/login'>Login</Link>
				</p>
			</Form>
		</Segment>;
	}
}

const pStyles = {
	textAlign: 'center'
};

export default RegisterForm;
