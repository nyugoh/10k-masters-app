import React, {Component} from 'react';
import { Segment, Button, Icon } from 'semantic-ui-react';

class TimeControls extends Component {
    render() {
        return (
            <Segment className={'ui center aligned'} >
                <Button size={'massive'} positive icon labelPosition={'left'}><Icon name={'play'}/> START</Button>
                <Button size={'massive'} color={'teal'} icon labelPosition={'left'}><Icon name={'pause'}/> PAUSE</Button>
            </Segment>
        );
    }
}

export default TimeControls;
