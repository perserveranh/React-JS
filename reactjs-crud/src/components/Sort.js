import React, { Component } from 'react';
import {DropdownButton} from 'react-bootstrap';
import {MenuItem} from 'react-bootstrap';



class Sort extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {};
	  this.handleSort=this.handleSort.bind(this);
	}

	handleSort(orderBy,orderDir){
		this.props.onClickSort(orderBy,orderDir);
	}

  render() {
  	let {orderBy,orderDir}	=	this.props;
  	let strSort 			=	orderBy + "-" + orderDir; 
	return (
		<div className="col-sm-3 col-md-3 col-lg-3" >
					
					<DropdownButton
					bsSize="small"
					title="Sort By"
					id="dropdown-size-small"
					>
					<MenuItem eventKey="1" onClick={() => this.handleSort('name','asc')} >Name ASC</MenuItem>
					<MenuItem eventKey="2" onClick={() => this.handleSort('name','desc')}>Name DESC</MenuItem>	
					<MenuItem divider />
					<MenuItem eventKey="3" onClick={() => this.handleSort('level','asc')}>Level ASC</MenuItem>
					<MenuItem eventKey="4" onClick={() => this.handleSort('level','desc')}>Level DESC</MenuItem>
					</DropdownButton>
					
					<span className="label label-success" style={{'marginLeft' :'20px'}} >{strSort}</span>
			</div>
	);
  }
}

export default Sort;
