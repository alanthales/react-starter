import React from 'react';
import {Layout, NavDrawer, Panel} from 'react-toolbox/lib/layout';
import AppBar from 'react-toolbox/lib/app_bar';
import styles from './Home.css';

class Home extends React.Component{
	constructor(props) {
		super(props);
		this.state = { drawerActive: false };
	}

	toggleDrawerActive() {
		this.setState({ drawerActive: !this.state.drawerActive });
	}

	render() {
		return (
			<Layout>
				<AppBar fixed flat title="React Starter" leftIcon='menu' onLeftIconClick={ this.toggleDrawerActive.bind(this) } />

				<NavDrawer
					clipped
					active={this.state.drawerActive}
					permanentAt='md'
					onOverlayClick={ this.toggleDrawerActive.bind(this) }>
					<p>
						Navigation, account switcher, etc. go here.
					</p>
				</NavDrawer>

				<Panel>
					<div className={styles.content}>
						<h1>Content Title</h1>
						<p>Main content goes here.</p>
					</div>
				</Panel>
			</Layout>
		);
	}
}

export default Home;
