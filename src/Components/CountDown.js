import React, {Component} from 'react';
import { Grid, Segment, Header, Label } from 'semantic-ui-react';

class CountDown extends Component {
    render() {
        return (
            <Segment>
                <Grid>
                    <Grid.Row columns={1}>
                        <Grid.Column>
                            <div className="ui column segment center aligned">
                                <div className="ui statistics" style={{display: 'inline'}}>
                                    <div className="statistic">
                                        <div className="label">HOURS</div>
                                        <div className="value" id="hoursDown">00</div>
                                    </div>
                                    <div className="statistic">
                                        <div className="label"/>
                                        <div className="value">:</div>
                                    </div>
                                    <div className="statistic">
                                        <div className="label">MINUTES</div>
                                        <div className="value" id="minutesDown">00</div>
                                    </div>
                                    <div className="statistic">
                                        <div className="label"/>
                                        <div className="value">:</div>
                                    </div>
                                    <div className="statistic">
                                        <div className="label">SECONDS</div>
                                        <div className="value" id="secondsDown">00</div>
                                    </div>
                                </div>
                            </div>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
        );
    }
}


export default CountDown;
