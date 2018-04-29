import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Grid } from 'semantic-ui-react';
import AddSkillForm from '../forms/AddSkill';
import { add } from '../actions/skill';

class AddSkill extends Component {
  submit = (skill) => {
    this.props.add(skill).then( ()=> {

    }).catch( error => {

    });
  };

  render() {
    return (
      <Grid>
        <Grid.Row columns='1' centered >
          <Grid.Column width='ten'>
            <br/>
            <h3>Create a new skill </h3>
            <p>A skill tread you can use to track the skill.</p>
            <hr/>
            <AddSkillForm submit={this.submit}/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default connect(null, { add })(AddSkill);
