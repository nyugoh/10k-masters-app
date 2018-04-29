import React, { Component } from 'react'
import { Input, Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

export default class Main extends Component {
	state = { activeItem: 'home' };

	handleItemClick = (e, { name }) => this.setState({ activeItem: name });

	render() {
		const { activeItem } = this.state;

		return (
			<Menu secondary>
				<Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick}>
					<h2 className='home'>
						<Link to={'/'}>10k Masters App</Link>
					</h2>
				</Menu.Item>
					<Menu.Item name='skills' active={activeItem === 'skills'} onClick={this.handleItemClick}>
						<Link to={'/skills'}>Skills</Link>
					</Menu.Item>
				<Menu.Item name='targets' active={activeItem === 'targets'} onClick={this.handleItemClick}>
					<Link to={'/targets'}>Targets</Link>
				</Menu.Item>
				<Menu.Menu position='right'>
					<Menu.Item>
						<Input icon='search' placeholder='Search...' />
					</Menu.Item>
					<Menu.Item name='login' active={activeItem === 'login'} onClick={this.handleItemClick}>
						<Link to={'/login'}>Login</Link>
					</Menu.Item>
				</Menu.Menu>
			</Menu>
		)
	}
}
