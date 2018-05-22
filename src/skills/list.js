import React, {Component} from 'react';
import {connect} from 'react-redux';
import SkillsList from '../tables/SkillsList';
import { edit, remove, archiveSkill } from '../actions/skill';

class SkillList extends Component {
	state = { modalOpen: false };

	handleOpen = () => this.setState({ modalOpen: true });

	handleClose = () => this.setState({ modalOpen: false });

	editSkill = skill => {
		this.props.edit(skill).then( () => {
			// TODO flag as edited
		}).catch( error => {
			alert(error);
		});
	};

	archiveSkill = id => {
		this.props.archiveSkill(id).then( () => {
			// TODO flag as archived
		}).catch( error => {
			alert(error);
		});
	};

	removeSkill = id => {
		this.props.remove(id).then( () => {
			// TODO :: Display success
		}).catch( error => {
			// TODO:: Display error
		});
	};

  render() {
    return (
      <div>
        <h2>Create a new skill </h2>
        <p>A skill tread you can use to track the skill.</p>
        <div className="ui divider"/>
				<SkillsList
					skills={this.props.skills}
					modalState={this.state}
					handleClose={this.handleClose}
					handleOpen={this.handleOpen}
					editSkill={this.editSkill}
					archiveSkill={this.archiveSkill}
					removeSkill={this.removeSkill}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
	skills: state.skill
});

export default connect(mapStateToProps, { edit, remove, archiveSkill })(SkillList);
