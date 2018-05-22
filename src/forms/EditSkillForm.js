import React, { Component } from 'react';
import { Form, Button, TextArea } from 'semantic-ui-react';

class EditSkillForm extends Component {
	constructor(props, context) {
		super(props, context);
		this.state.data = { ...props.skill };
	};

	handleChange = e => {
		this.setState({ data: { ...this.state.data, [e.target.name]: e.target.value } });
	};

	submit = () => {
		this.props.save(this.state.data);
		this.setState({ loading: true });
		this.props.handleClose();
	};

	state = {
		data: {},
		errors:[],
		loading: false
	};

	render() {
		const { data, loading } = this.state;
		return (
			<Form onSubmit={this.submit} loading={loading}>
				<Form.Group widths='equal'>
					<Form.Input
						fluid
						label='Subject'
						value={data.subject}
						name='subject'
						onChange={this.handleChange}/>
					<Form.Input
						fluid
						label='Hours'
						value={data.hours}
						name='hours'
						onChange={this.handleChange}/>
				</Form.Group>
				<Form.Group widths='equal'>
					<Form.Input
						fluid
						name='description'
						label='Description (Optional)'
						value={data.description}
						onChange={this.handleChange}
					/>
					<Form.Input
						name='theme'
						type='color'
						label='Theme '
						value={data.theme}
						style={{color: data.theme}}
						onChange={this.handleChange}/>
				</Form.Group>
				<Form.Field>
					<label>Set a few milestone goals</label>
					<TextArea
						fluid
						name="goals"
						id="goals"
						onChange={this.handleChange}
						placeholder="Enter goals in point form, separated by commas i.e
-Learn to C++,
-Learn to Java,"/>
				</Form.Field>
				<Button
					positive
					icon='edit'
					labelPosition='right'
					content='Save'
					floated='right'/>
				<div className="ui hidden divider clearing"/>
			</Form>
		);
	}
}

export default EditSkillForm;