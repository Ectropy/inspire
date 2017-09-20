import React, { Component } from 'react';
import NavBarHeader from './nav';
import Video from './video/video';
import BandList from '../containers/BandList';
import TodoList from '../containers/TodoList';
import { Grid } from 'react-bootstrap';

export default class App extends Component {
	render () {
		return (
			<div>
				<NavBarHeader />
				<Grid>
					<BandList />
				</Grid>
				<TodoList />
			</div>
		);
	}
}
