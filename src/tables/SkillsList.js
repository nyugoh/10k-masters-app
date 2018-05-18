import React from 'react';
import { Header, Table, Rating } from 'semantic-ui-react';

const SkillsList = ({ skills }) => (
	<Table celled padded>
		<Table.Header>
			<Table.Row>
				<Table.HeaderCell singleLine>Subject</Table.HeaderCell>
				<Table.HeaderCell>Hours</Table.HeaderCell>
				<Table.HeaderCell>Description</Table.HeaderCell>
				<Table.HeaderCell>Progress</Table.HeaderCell>
				<Table.HeaderCell>Milestones</Table.HeaderCell>
			</Table.Row>
		</Table.Header>

		<Table.Body>
			{skills.map((skill, index) => {
				return (
					<Table.Row id={index}>
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
					</Table.Row>
				);
			})}
		</Table.Body>
	</Table>
);

export default SkillsList;