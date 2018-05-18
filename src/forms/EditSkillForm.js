import React, { Component } from 'react';
import { Form, Button, TextArea } from 'semantic-ui-react';

class EditSkillForm extends Component {
	render() {
		const { skill } = this.props;
		return (
			<Form onSubmit={this.submit}>
				<Form.Group widths='equal'>
					<Form.Input fluid label='Subject' value={skill.subject} />
					<Form.Input fluid label='Hours' value={skill.hours} />
				</Form.Group>
				<Form.Group widths='equal'>
					<Form.Input fluid
											name='description'
											label='Description (Optional)'
											value={skill.description}
											onChange={this.handleChange}
					/>
					<Form.Input
						name='theme'
						type='color'
						label='Theme '
						value={skill.theme}
					/>
				</Form.Group>
				<Form.Field>
					<label>Set a few milestone goals</label>
					<TextArea fluid
										name="goals"
										id="goals"
										onChange={this.handleChange}
										placeholder="Enter goals in point form, separated by commas i.e
-Learn to C++,
-Learn to Java,"/>
				</Form.Field>
				<Button  positive icon='edit' labelPosition='right' content='Save' floated='right'/>
				<div className="ui hidden divider clearing"/>
			</Form>
		);
	}
}

export default EditSkillForm;