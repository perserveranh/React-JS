import React, { Component } from 'react';
import './App.css';
import Title from './components/Title';
import Control from './components/Control';
import Form from './components/Form';
import List from './components/List';
import items from './mocks/tasks';
import {filter,includes , orderBy as funcOrderBy , remove} from 'lodash';

const uuid=require('uuid/v4');
class App extends Component {
    constructor(props) {
      super(props);
    
      this.state = {
              items: items,
              isShowForm: false,
              strSearch: '',
              orderBy: 'name',
              orderDir:'desc',
              itemSelected: null,
      };
      this.handleToogleForm = this.handleToogleForm.bind(this);
      this.closeForm        = this.closeForm.bind(this);
      this.handleSearch     = this.handleSearch.bind(this);
      this.handleSort       = this.handleSort.bind(this);
      this.handleDelete     = this.handleDelete.bind(this);
      this.handleSubmit     = this.handleSubmit.bind(this);
      this.handleEdit       = this.handleEdit.bind(this);
    }

    handleSubmit(item){
      let {items} = this.state; 
      if(item.id !== ''){ //Edit task
          items.forEach((elm,key ) =>{
            if(elm.id===item.id){
              items[key].name= item.name;
              items[key].level= +item.level; 
            }
          })

      }
      else //Add task
      {
        items.push ({
          id  : uuid(),
          name : item.name,
          level : +item.level,
        });

      }

      this.setState({
        items : items,
        isShowForm: false,
      });
      localStorage.setItem('items',JSON.stringify(items));
      // localStorage.removeItem('item');
      console.log(localStorage.getItem('items'));
    }

    componentWillMount(){
      let items = JSON.parse(localStorage.getItem('items'));
      this.setState({
        items: items,
      })
    }

    handleDelete(id){
      let items=this.state.items;
      remove(items,(item) =>{
          return item.id === id;
      });
      this.setState({
        items: items
      });
      localStorage.setItem('items',JSON.stringify(items));
      localStorage.removeItem('item');
      // console.log(localStorage.getItem('items'));
    }

    handleSort(orderBy,orderDir){
      this.setState({
        orderBy: orderBy,
        orderDir: orderDir
      })
    }

    handleToogleForm(){
      this.setState({
        isShowForm: !this.state.isShowForm,
        itemSelected: null
      })
    } 
    closeForm(){
      this.setState({
        isShowForm:false
      })
    }

    handleSearch(value){
      this.setState({
        strSearch: value
      })
    }

    handleEdit(item){
      console.log(item);
      this.setState({
        itemSelected: item,
        isShowForm: true,
      });
      localStorage.setItem('items',JSON.stringify(this.state.items));
     
    }

  render() {
    let itemsOrigin=[...this.state.items];
    let items=[];
    let elmForm=null;
    let {orderBy , orderDir, isShowForm, strSearch, itemSelected}=this.state;
    //add task
    if(isShowForm){
      elmForm = 
      <Form  
        itemSelected={itemSelected}
        onClickSubmit={this.handleSubmit}
        onClickCancel={this.closeForm} />;
    }
    //search
    items = filter(itemsOrigin, (item) => { 
      return includes(item.name.toLowerCase(), strSearch.toLowerCase());
     });
    //Sort
    items = funcOrderBy(items, [orderBy], [orderDir]);

    return (
            <div className="App">
                <Title />

                <Control
                  onClickSort={this.handleSort}
                  orderBy={orderBy}
                  orderDir={orderDir}
                  onClickSearchGo={this.handleSearch}
                   onClickAdd={this.handleToogleForm}
                   isShowForm={isShowForm} />
                {elmForm}
                      
                <List 
                onClickEdit={this.handleEdit}
                onClickDelete={this.handleDelete}
                items={items} />

            </div>
    );
  }
}

export default App;



    // if(search.length>0){

    //   itemsOrigin.forEach((item) => {
    //     if(item.name.toLowerCase().indexOf(search)!== -1){
    //       items.push(item);
    //     }
    //   });
    // }
    // else {
    //   items=itemsOrigin;
    // }

