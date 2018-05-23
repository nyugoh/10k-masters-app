import React, {Component} from 'react';
import { Segment, Button, Icon, Message } from 'semantic-ui-react';

class TimeControls extends Component {
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
                <Button
                    disabled={true}
                    size={'massive'}
                    positive
                    icon
                    onClick={this.endSession}
                    labelPosition={'left'}>
                    <Icon name={'stop'}/>
                    STOP
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
