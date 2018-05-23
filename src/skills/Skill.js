import React, {Component} from "react";
import { connect } from 'react-redux';
import { Header, Icon, Label, Segment } from 'semantic-ui-react';
import CountDown from '../Components/CountDown';
import Progress from '../Components/Progress';
import TimeControls from '../Components/TimeControls';
import Activities from '../Components/Activities';

class Skill extends Component {
	constructor(props) {
		super(props);
		this.state = {
			skill: {},
			session: {
				status: 'new',
				startTime: 0,
				totalTime: 0,
				startSession: 0,
				endSession: 0,
				notes: ''
			}
		};
	};

	componentDidMount() {
        if( this.props.skills.length > 0){
            const skill = this.props.skills.filter( skill => skill._id === this.props.match.params.id)[0];
            this.setState({ skill: skill });
		}
    };

	addNotes = (note) =>{
		this.setState({ session: { ...this.state.session, notes: note }});
	};

	render() {
		const skills = this.props.skills;
		const { session } = this.state;
		if(skills.length > 0) {
            const skill = this.props.skills.filter( skill => skill._id === this.props.match.params.id)[0];
			return (
				<div>
					<Header as={'h1'}>
						<span style={{marginRight:20, marginTop: 20}}>{skill.subject}</span>
						<Label tag={true} style={{backgroundColor:skill.theme}}>{skill.hours} Hours</Label>
					</Header>
					<div className="ui divider"/>
					<CountDown/>
					<Progress
						session={session}
						skill={skill}/>
					<br/>
					<Segment className={'ui center aligned'} >
						<TimeControls
							startSession={this.startSession}
							pauseSession={this.pauseSession}
							resumeSession={this.resumeSession}
							endSession={this.endSession}
							addNotes={this.addNotes}
							status={session.status}/>
						<Label
							pointing={'above'}
							color={'green'}>
							{session.status}
						</Label>
					</Segment>
					<div className="ui divider"/>
					<br/><br/>
					<Activities skill={skill}/>
				</div>);
		} else {
			return (
				<div>
					<Header>Loading <Icon loading color={'teal'} name='spinner' /> </Header>
				</div>
			);
		}
	};

    startSession = () =>{
    	// Check for existing session
		var time = 0, now = new Date().getTime();
		if (this.state.session.startTime !== 0) {
			time = this.getTimeDifference(now, this.state.session.startTime);
            time += this.state.session.totalTime;
            this.setState({ session: { ...this.state.session, startTime: now, status: 'in-progress', totalTime: time }});
        } else {
            this.setState({ session: { ...this.state.session, startTime: now, startSession: now, status: 'in-progress', totalTime: 0 }});
		}
    };

    pauseSession = () =>{
    	let time = this.getTimeDifference(new Date().getTime(), this.state.session.startTime);
    	time += this.state.session.totalTime;
        this.setState({ session: { ...this.state.session, startTime: new Date().getTime(), status: 'paused', totalTime: time }});
    };

    resumeSession = () =>{
        this.setState({ session: { ...this.state.session, status: 'in-progress', startTime: new Date().getTime() }});
    };

    endSession = () =>{
        let time = this.getTimeDifference(new Date().getTime(), this.state.session.startTime);
        time += this.state.session.totalTime;
        this.setState({ session: { ...this.state.session, endSession: new Date().getTime(), startTime: new Date().getTime(), status: 'complete', totalTime: time }});
    };

    getTimeDifference = (etime, stime) => {
    	return (parseInt(etime) - parseInt(stime));
	};
}

const mapStateToProps = state => ({
	skills: state.skill
});

export default connect(mapStateToProps)(Skill);
