import React, {Component} from 'react';
import { Grid, Segment, Header, Label } from 'semantic-ui-react';

class CountDown extends Component {
    getTime = milliseconds =>{
        let day, hour, minute, seconds;
        seconds = Math.floor(milliseconds / 1000);
        minute = Math.floor(seconds / 60);
        seconds = seconds % 60;
        hour = Math.floor(minute / 60);
        minute = minute % 60;
        day = Math.floor(hour / 24);
        hour = hour % 24;
        return {
            day: day,
            hours: hour <10? `0${hour}`: hour,
            minutes: minute < 10 ? `0${minute}`: minute,
            seconds: seconds < 10 ? `0${seconds}`: seconds
        }
    };

    render() {
        const time = this.getTime(this.props.session.totalTime);
        return (
            <Segment>
                <Grid>
                    <Grid.Row columns={1}>
                        <Grid.Column>
                            <div className="ui column segment center aligned">
                                <div className="ui statistics" style={{display: 'inline'}}>
                                    <div className="statistic">
                                        <div className="label">HOURS</div>
                                        <div className="value" id="hoursDown">{time.hours}</div>
                                    </div>
                                    <div className="statistic">
                                        <div className="label"/>
                                        <div className="value">:</div>
                                    </div>
                                    <div className="statistic">
                                        <div className="label">MINUTES</div>
                                        <div className="value" id="minutesDown">{time.minutes}</div>
                                    </div>
                                    <div className="statistic">
                                        <div className="label"/>
                                        <div className="value">:</div>
                                    </div>
                                    <div className="statistic">
                                        <div className="label">SECONDS</div>
                                        <div className="value" id="secondsDown">{time.seconds}</div>
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
