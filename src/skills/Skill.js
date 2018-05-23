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
				startTime: '',
				endTime: ''
			}
		};
	};

	componentDidMount() {
        if( this.props.skills.length > 0){
            const skill = this.props.skills.filter( skill => skill._id === this.props.match.params.id)[0];
            this.setState({ skill: skill });
		}
    };

	render() {
		const skills = this.props.skills;
		const { skill, session } = this.state;
		if(skills.length > 0) {
			return (
				<div>
					<Header as={'h1'}>
						<span style={{marginRight:20, marginTop: 20}}>{skill.subject}</span>
						<Label tag={true} style={{backgroundColor:skill.theme}}>{skill.hours} Hours</Label>
					</Header>
					<div className="ui divider"/>
					<CountDown/>
					<Progress skill={skill}/><br/>
					<Segment className={'ui center aligned'} >
						<TimeControls
							startSession={this.startSession}
							pauseSession={this.pauseSession}
							resumeSession={this.resumeSession}
							endSession={this.endSession}
							status={session.status}/>
						<Label pointing={'above'} color={'green'}>{session.status}</Label>
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
        this.setState({ session: { ...this.state.session, status: 'in-progress' }});
    };

    pauseSession = () =>{
        this.setState({ session: { ...this.state.session, status: 'paused' }});
    };

    resumeSession = () =>{
        this.setState({ session: { ...this.state.session, status: 'in-progress' }});
    };

    endSession = () =>{
        this.setState({ session: { ...this.state.session, status: 'complete' }});
    };
}

const mapStateToProps = state => ({
	skills: state.skill
});

export default connect(mapStateToProps)(Skill);
