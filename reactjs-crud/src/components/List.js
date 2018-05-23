import React, { Component } from 'react';
import Item from './Item';


class List extends Component {

  constructor(props) {
    super(props);
  
    this.state = {

    };


  }
  render() {
    let items=this.props.items;
    let elmItems=items.map((item,index) => { 
      return (
          <Item 
           onClickEdit={this.props.onClickEdit}
           key= {index} item={item} index={index} onClickDelete={this.props.onClickDelete}/>
        );
    })
    return (
                    <div className="panel panel-default">
                      <div className="panel-heading">List Task</div>
                      <table className="table table-condensed">
                        <thead>
                          <tr>
                            <th className="text-center">#</th>
                            <th className="text-center">Task</th>
                            <th className="text-center">Level</th>
                            <th className="text-center">Action</th>
                          </tr>
                        </thead>
                        <tbody>
                        {elmItems}
                        </tbody>
                      </table>
                    </div>

    );
  }
}

export default List;
