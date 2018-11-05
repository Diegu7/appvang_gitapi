import React from 'react'
import {Form, Button, FormGroup, FormControl } from 'react-bootstrap';
import axios from 'axios';

class Search extends React.Component {
	state = {
		userName: ''
	}

	handleSubmit = event =>{
		event.preventDefault()

		axios
			.get(`https://api.github.com/users/${this.state.userName}`)
	      	.then(resp => {
	        	this.props.onSubmit(resp.data)
	        	this.setState({ userName: '' })
	      	})
	}

	render(){
		return (
		    <Form inline onSubmit={this.handleSubmit}>
		      <FormGroup controlId="formInlineEmail">
		        <FormControl type="text" value={this.state.userName} onChange={event => this.setState({userName: event.target.value})} placeholder="Enter username" />
		      </FormGroup>{' '}
		      <Button type="submit">Add</Button>
		    </Form>
		)
	}
  
}

export default Search;