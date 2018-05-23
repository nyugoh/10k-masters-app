import React, {Component} from "react";
import { connect } from 'react-redux';
import { Header, Icon, Label } from 'semantic-ui-react';
import CountDown from '../Components/CountDown';
import Progress from '../Components/Progress';
import TimeControls from '../Components/TimeControls';
import Activities from '../Components/Activities';

class Skill extends Component {
	constructor(props) {
		super(props);
		this.skill = {};
	};

	render() {
		const skills = this.props.skills;
		const skill = skills.filter( skill => skill._id === this.props.match.params.id)[0];
		if(skills.length > 0)
			return (
				<div>
					<Header as={'h1'}>
						<span style={{marginRight:20, marginTop: 20}}>{skill.subject}</span>
						<Label tag={true} style={{backgroundColor:skill.theme}}>{skill.hours} Hours</Label>
					</Header>
					<div className="ui divider"/>
					<CountDown/>
					<Progress skill={skill}/><br/>
					<TimeControls/>
					<div className="ui divider"/>
					<br/><br/>
					<Activities skill={skill}/>
				</div>
			);
		else
			return (
				<div>
					<Header>Loading <Icon loading color={'teal'} name='spinner' /> </Header>
				</div>
			);
	}
}

const mapStateToProps = state => ({
	skills: state.skill
});

export default connect(mapStateToProps)(Skill);
