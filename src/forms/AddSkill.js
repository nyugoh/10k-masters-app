import React, {Component} from 'react';
import { Form, Icon, Input, TextArea, Button } from 'semantic-ui-react';

class AddSkill extends Component {
  state = {
    data: {},
    loading: false,
    errors: {}
  };

  submit = () => {
    // TODO Add validation
    this.props.submit(this.state.data);
  };

  handleChange = e => {
    this.setState({ data: { ...this.state.data, [e.target.name]: e.target.value } });
  };

  render() {
    return (
      <Form onSubmit={this.submit}>
        <Form.Group>
          <Form.Field>
            <label>Owner</label>
            <Icon name='user' circular color='grey'/> nyugoh <span className='ui teal'>/</span>
          </Form.Field>
          <Form.Field>
            <label>Skill name</label>
            <Input
              name='subject'
                   placeholder='Short & memorable name...'
            onChange={this.handleChange}/>
          </Form.Field>
        </Form.Group>
        <p>Great skill names are short and memorable</p>
        <div className="ui divider"/>
        <Form.Field>
          <Form.Input fluid
                      name='description'
                      label='Description (Optional)'
                      placeholder='A brief description..'
                      onChange={this.handleChange}
          />
        </Form.Field>
        <div className="ui divider"/>
        <Form.Group widths='equal'>
          <Form.Input
            name='hours'
            type='number'
            placeholder='1000 hours is a good number...'
            label='Set hours to finish'
            onChange={this.handleChange}
          />
          <Form.Input
            name='theme'
            type='color'
            label='Theme '
            onChange={this.handleChange}
          />
        </Form.Group>
        <div className="ui divider"/>
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
        <p>You can add more milestones later when you achieve</p>
        <div className="ui divider"/>
        <Button type='submit' floated='left' color='instagram'>Add Skill</Button>
        <div className="ui divider hidden"/>
      </Form>
    );
  }
}

export default AddSkill;
