import React from 'react';
import {List, ListItem} from 'react-toolbox/lib/list';
import {withRouter} from 'react-router-dom';

class AppMenu extends React.Component{
    constructor(props) {
        super(props);
    }

    changeRoute(route) {
        this.props.history.push(route);
        if (this.props.onChangeRoute) {
            this.props.onChangeRoute(route);
        }
    }

    render() {
        return (
            <List selectable ripple>
                <ListItem caption="Home" leftIcon="home" onClick={this.changeRoute.bind(this, '/')}>
                </ListItem>
                <ListItem caption="About" leftIcon="help" onClick={this.changeRoute.bind(this, '/about')}>
                </ListItem>
            </List>
        );
    }
}

export default withRouter(AppMenu);
