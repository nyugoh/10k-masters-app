import React from "react";
import { Grid, List, Icon } from 'semantic-ui-react';

function footer() {
	return (
		<div>
			<hr/>
			<Grid>
				<Grid.Row>
					<Grid.Column>
						<span>&copy; {new Date().getFullYear()} 10k Masters App, Inc.</span>
						<List bulleted horizontal id="footer-left">
							<List.Item as='a'>Terms</List.Item>
							<List.Item as='a'>Privacy</List.Item>
							<List.Item as='a'>Help</List.Item>
						</List>
						<Icon name='circled github' id="footer-center"/>
						<List bulleted horizontal id="footer-right">
							<List.Item as='a'>About Us</List.Item>
							<List.Item as='a'>Sitemap</List.Item>
							<List.Item as='a'>Contact</List.Item>
						</List>
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</div>
	);
}


export default footer;
