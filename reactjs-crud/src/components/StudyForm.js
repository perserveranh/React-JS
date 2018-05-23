import React, { Component } from 'react';
import {FormGroup} from 'react-bootstrap';
import {ControlLabel} from 'react-bootstrap';
import {FormControl} from 'react-bootstrap';
import {Checkbox} from 'react-bootstrap';
import {Radio} from 'react-bootstrap';
import {Button} from 'react-bootstrap';


class StudyForm extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	username:'',
	  	coursel: 'other',
	  	objectckb: false,
	  	objectckbError: false,
	  	objectRadio:'radio',

	  };
	  this.handleChange=this.handleChange.bind(this);
	  this.handleSubmit=this.handleSubmit.bind(this);
	}

  handleChange(event) {

        const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    // const value =target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });

  }

  handleSubmit(event) {
        console.log(this.state);
    event.preventDefault();
  }


  render() {
    return (
			<form>
				<FormGroup controlId="formValidationSuccess1" validationState="success">
					<ControlLabel>User Name</ControlLabel>
					<FormControl type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
					</FormGroup>
					<FormGroup controlId="formControlsSelect">
						<ControlLabel>Coursel</ControlLabel>
						<FormControl componentClass="select" name="coursel" value={this.state.coursel} onChange={this.handleChange} placeholder="select">
							<option value="angularjs">Angular JS</option>
							<option value="nodejs">Node JS</option>
							<option  value="other">...</option>
						</FormControl>
					</FormGroup>
					<Checkbox validationState="success" value="checkbox" onChange={this.handleChange} name="objectckb" checked={this.state.objectckb}>Checkbox with success</Checkbox>
					<Radio validationState="warning" value="radio" name="objectRadio" onChange={this.handleChange} checked={this.state.objectRadio}>Radio with warning</Radio>
					<Checkbox validationState="error" value="checkboxError" name="objectckbError" onChange={this.handleChange} checked={this.state.objectckbError}>Checkbox with error</Checkbox>
				<Button type="submit" onClick={this.handleSubmit}>Submit</Button>
			</form>
    );
  }
}

export default StudyForm;
