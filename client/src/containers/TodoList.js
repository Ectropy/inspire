import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table } from 'react-bootstrap';

class TodoList extends Component {
	renderList () {
		return this.props.todos.map((todos) => {
			return (
				<tr>
					<td>{todos.item}</td>
					<td>{todos.category}</td>
					<td>{todos.finishby}</td>
				</tr>
			);
		});
	}

	render () {
		return (
			<Table striped bordered>
				<thead>
					<tr>
						<th>Item</th>
						<th>Category</th>
						<th>Finish by</th>
					</tr>
				</thead>
				<tbody>
					{this.renderList()}
				</tbody>
			</Table>
		);
	}
}

// takes app state as arg
// whatever gets returned will show up as props inside of todo list

function mapStateToProps (state) {
	return {
		todos: state.todos
	};
}

// export
export default connect(mapStateToProps)(TodoList);
