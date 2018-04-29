import React, { Component } from 'react'
import { Input, Menu } from 'semantic-ui-react'

export default class MenuExampleSecondary extends Component {
	state = { activeItem: 'home' };

	handleItemClick = (e, { name }) => this.setState({ activeItem: name });

	render() {
		const { activeItem } = this.state;

		return (
			<Menu secondary>
				<Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick}>
					<h2 className='home'>10k Masters App</h2>
				</Menu.Item>
					<Menu.Item name='skills' active={activeItem === 'skills'} onClick={this.handleItemClick} />
				<Menu.Item name='targets' active={activeItem === 'targets'} onClick={this.handleItemClick} />
				<Menu.Menu position='right'>
					<Menu.Item>
						<Input icon='search' placeholder='Search...' />
					</Menu.Item>
					<Menu.Item name='login' active={activeItem === 'login'} onClick={this.handleItemClick} />
				</Menu.Menu>
			</Menu>
		)
	}
}
