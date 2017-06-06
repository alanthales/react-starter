import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Layout, NavDrawer, Panel} from 'react-toolbox/lib/layout';
import AppBar from 'react-toolbox/lib/app_bar';
import AppMenu from './components/custom/AppMenu';
import Home from './components/home/Home';
import About from './components/about/About';

class App extends React.Component{
	constructor(props) {
		super(props);
		this.state = { drawerActive: false };
	}

	toggleDrawerActive() {
		this.setState({ drawerActive: !this.state.drawerActive });
	}

	render() {
		return (
			<Router>
				<Layout>
					<AppBar fixed flat title="React Starter" leftIcon='menu' onLeftIconClick={ this.toggleDrawerActive.bind(this) } />

					<NavDrawer
						clipped
						active={this.state.drawerActive}
						permanentAt='md'
						onOverlayClick={ this.toggleDrawerActive.bind(this) }>
						<AppMenu onChangeRoute={this.toggleDrawerActive.bind(this)} />
					</NavDrawer>

					<Panel>
						<Route exact path="/" component={Home} />
						<Route path="/about" component={About} />
					</Panel>
				</Layout>
			</Router>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('app'));
