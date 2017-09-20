import React, { Component } from 'react';
import NavBarHeader from './nav';
import Video from './video/video';
import BandList from '../containers/BandList';
import TodoList from '../containers/TodoList';

export default class App extends Component {
	render () {
		return (
			<div>
				<NavBarHeader />
				<BandList />
				<TodoList />
			</div>
		);
	}
}
