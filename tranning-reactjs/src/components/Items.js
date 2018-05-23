import React, { Component } from 'react';

class Items extends Component {

constructor(props) {
  super(props);

  this.handleViewProduct=this.handleViewProduct.bind(this);
  this.state = {
      products : [ 
          {
          id : 1,
          name : 'Iphone 6',
          gia : '1$',
          status : true
          },
          {
          id : 2,
          name : 'Iphone 7',
          gia : '2$',
          status : true
          },
          {
          id : 3,
          name : 'Iphone 8',
          gia : '3$',
          status : true
          }
          ]
  };
}
    handleViewProduct(text)
    {
      alert(text +"-" + this.props.gia);

    }
    render() {

          let elmItem=this.state.products.map((product,index) =>{
          let result='';
          if(product.status){
          result=( 
            <tbody>    
                  <tr key={index}>
                    <td>{index}</td>
                    <td>{product.name}</td>
                    <td>{product.gia}</td>
                  </tr>
                  </tbody>
          )}
          return result;
          });
    return (
        <div>{elmItem}</div>
    );
  }
}

export default Items;
