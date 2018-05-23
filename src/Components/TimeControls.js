import React, {Component} from 'react';
import { Form, TextArea, Button, Icon, Message } from 'semantic-ui-react';

class TimeControls extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: ''
        };
    };

    startSession = () =>{
        this.props.startSession();
    };

    pauseSession = () =>{
        this.props.pauseSession();
    };

    resumeSession = () =>{
        this.props.resumeSession();
    };

    endSession = () =>{
        this.props.endSession();
    };

    submit = () =>{
      this.props.addNotes(this.state.notes);
    };

    handleChange = e =>{
      this.setState({ ...this.state, [e.target.name]: e.target.value });
    };

    render() {
        const { status } = this.props;
        if( status === 'new') {
            return (<div>
                <Button
                    size={'massive'}
                    positive
                    icon
                    onClick={this.startSession}
                    labelPosition={'left'}>
                    <Icon name={'play'}/>
                    START
                </Button>
                <Button
                    disabled={true}
                    size={'massive'}
                    color={'teal'}
                    icon
                    onClick={this.pauseSession}
                    labelPosition={'left'}>
                    <Icon name={'pause'}/>
                    PAUSE
                </Button>
            </div>);
        } else if (status === 'in-progress') {
            return (<div>
                <Button
                    size={'massive'}
                    positive
                    icon
                    onClick={this.endSession}
                    labelPosition={'left'}>
                    <Icon name={'stop'}/>
                    STOP
                </Button>
                <Button
                    size={'massive'}
                    color={'teal'}
                    icon
                    onClick={this.pauseSession}
                    labelPosition={'left'}>
                    <Icon name={'pause'}/>
                    PAUSE
                </Button>
            </div>);
        } else if (status === 'paused') {
            return (<div>
                <Button
                    size={'massive'}
                    positive
                    icon
                    onClick={this.endSession}
                    labelPosition={'left'}>
                    <Icon name={'stop'}/>
                    STOP
                </Button>
                <Button
                    size={'massive'}
                    color={'teal'}
                    icon
                    onClick={this.resumeSession}
                    labelPosition={'left'}>
                    <Icon name={'play'}/>
                    RESUME
                </Button>
            </div>);
        } else if (status === 'complete') {
            return ( <div>
                <Form reply onSubmit={this.submit}>
                    <h3>Add session notes</h3>
                    <Form.TextArea
                        autoHeight={true}
                        name='notes'
                        onChange={this.handleChange}
                        placeholder={'Add a small note/ message to describe what you have done...'}/>
                    <Button content='Add note' labelPosition='left' icon='edit' type={'submit'} primary />
                </Form>
            </div>);
        } else {
            return (
              <Message>
                  <Message.Header>Application error</Message.Header>
                  <Message.Content>Service monkeys have been notified, they are working to restore services.</Message.Content>
              </Message>
            );
        }
    }
}

export default TimeControls;
