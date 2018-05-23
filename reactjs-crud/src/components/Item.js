import React, { Component } from 'react';

class Item extends Component {
    constructor(props) {
    super(props);

    this.state = {};
    this.handleDelete=this.handleDelete.bind(this);
    this.handleEdit=this.handleEdit.bind(this);
    }
    setLevelElement(level){
    let elmLevel=<span className="label label-danger">medium</span>;
    if(level===0){
    elmLevel=<span className="label label-info">easy</span>;
    }
    else if(level===2){
    elmLevel=<span className="label label-default">hight</span>;
    }
    return elmLevel;
    }
    handleEdit(item){
    this.props.onClickEdit(item);
    }
    handleDelete(id){
    this.props.onClickDelete(id);
    }

  render() {
    const {item}=this.props;
    const {index}=this.props; 
    
      return (
      <tr>
        <td className="text-center">{index +1 }</td>
        <td className="text-center">{item.name}</td>
        <td className="text-center">{this.setLevelElement(item.level)}</td>
        <td className="text-center">
          <button type="button" onClick={() => this.handleEdit(item)} className="btn btn-warning" style={{'paddingRight':'20px'}}>Edit</button>
          <button type="button" onClick={() => this.handleDelete(item.id)} className="btn btn-danger">Delete</button>
        </td>
      </tr>
      );
  }
}

export default Item;
