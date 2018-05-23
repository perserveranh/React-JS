import React, { Component } from 'react';
import Items from './Items';
// import { FormGroup, Label, Input } from 'reactstrap';

class Products extends Component {
  constructor(props) {
    super(props);
  
    this.state = {};
    // this.handleSubmit=this.handleSubmit.bind(this);
  }

  handleSubmit = () =>{
    console.log(this.name.value);
  }

  handleClickMe(){
   
  }
  render() {
      return (
      <div className="Products">
      <div className="container">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
            </tr>
          </thead>
      
          <Items />
         

        </table>
      </div>
      </div>
    );
  }
}

export default Products;
