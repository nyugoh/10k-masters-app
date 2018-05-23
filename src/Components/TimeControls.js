import React, {Component} from 'react';
import { Segment, Button, Icon } from 'semantic-ui-react';

class TimeControls extends Component {
    render() {
        return (
            <Segment >
                <Button size={'massive'} positive icon labelPosition={'left'}><Icon name={'play'}/> START</Button>
            </Segment>
        );
    }
}

export default TimeControls;
