import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../../actions/index';
import { Link } from 'react-router';
import { Button } from 'react-bootstrap';

class Newitem extends Component {
	handleFormSubmit (formProps) {
		console.log(formProps.title, formProps.category, formProps.url, formProps.content);
		this.props.createPost(formProps);
	}
	render () {
		const {handleSubmit, fields: { title, category, url, content }} = this.props;
		return (
			<form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
				<fieldset className="form-group">
					<label>Title</label>
					<input {...title} className="form-control" />
				</fieldset>
				<fieldset className="form-group">
					<label>Category</label>
					<input {...category} className="form-control" />
				</fieldset>
				<fieldset className="form-group">
					<label>URL</label>
					<input {...url} className="form-control" />
				</fieldset>
				<fieldset className="form-group">
					<label>Content</label>
					<textarea type="text" rows="8" {...content} className="form-control" />
				</fieldset>
				<Button bsStyle="primary" type="submit">
					Submit
				</Button>
			</form>
		);
	}
}

export default reduxForm({
	form: 'newitem',
	fields: ['title', 'category', 'url', 'content']
}, null, { createPost })(Newitem);
