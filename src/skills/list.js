import React, {Component} from 'react';
import {connect} from 'react-redux';
import SkillsList from '../tables/SkillsList';
import { remove } from '../actions/skill';

class SkillList extends Component {
	editSkill = id => {
		console.log(id);
	};

	archiveSkill = id => {
		console.log(id);
	};

	removeSkill = id => {
		remove(id).then( () => {
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

export default connect(mapStateToProps)(SkillList);
