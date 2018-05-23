import React, { Component } from 'react';
import Search from './Search';
import Sort from './Sort';


class Control extends Component {
constructor(props) {
  super(props);

  this.state = {};
  this.handleClickAdd=this.handleClickAdd.bind(this);
}

	handleClickAdd(){
		this.props.onClickAdd();
	}
  render() {
  	let {orderBy,orderDir}	=	this.props;
  	let elmButton 			=   <button type="button" onClick={this.handleClickAdd} className="btn btn-info btn-block">Add task</button>;
  	if(this.props.isShowForm){
  		elmButton 			=	<button type="button" onClick={this.handleClickAdd} className="btn btn-danger btn-block">Close Form</button>;
  	}
		return (
		<div className 	=	"row" style={{'paddingBottom':'20px'}}>
			<Search  onClickGo={this.props.onClickSearchGo} />
			<Sort 
				onClickSort={this.props.onClickSort}
				orderBy={orderBy}
				orderDir={orderDir}
			/>
			<div className="col-md-5 col-lg-5 col-sm-5">
			{elmButton}
				
			</div>
			
		</div>
		);
  }
}

export default Control;
