import React from 'react';
import { Header, Table, Button } from 'semantic-ui-react';

const SkillsList = ({ skills, editSkill, removeSkill, archiveSkill }) => (
	<Table celled padded>
		<Table.Header>
			<Table.Row>
				<Table.HeaderCell singleLine>Subject</Table.HeaderCell>
				<Table.HeaderCell>Hours</Table.HeaderCell>
				<Table.HeaderCell>Description</Table.HeaderCell>
				<Table.HeaderCell>Progress</Table.HeaderCell>
				<Table.HeaderCell>Milestones</Table.HeaderCell>
				<Table.HeaderCell>Actions</Table.HeaderCell>
			</Table.Row>
		</Table.Header>

		<Table.Body>
			{skills.map((skill, index) => {
				return (
					<Table.Row key={index}>
						<Table.Cell>
							<Header as='h4' textAlign='center'>{skill.subject}</Header>
						</Table.Cell>
						<Table.Cell singleLine>{skill.hours}</Table.Cell>
						<Table.Cell singleLine>
							{skill.description}
						</Table.Cell>
						<Table.Cell textAlign='right'>
							80% <br />
							<a href='#'>18 commits</a>
						</Table.Cell>
						<Table.Cell>
							{skill.goals}
						</Table.Cell>
						<Table.Cell>
							<Button
								inverted
								color='blue'
								icon='edit'
							onClick={editSkill.bind(this, skill._id)}/>
							<Button
								inverted
								color='green'
								icon='archive'
							onClick={archiveSkill.bind(this, skill._id)}/>
							<Button
								inverted
								color='red'
								icon='trash'
							onClick={removeSkill.bind(this, skill._id)}/>
						</Table.Cell>
					</Table.Row>
				);
			})}
		</Table.Body>
	</Table>
);

export default SkillsList;