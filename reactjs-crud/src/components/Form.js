import React, { Component } from 'react';


class Form extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      task_id: '',
      task_name: '',
      task_level: 0,
    };

    this.handleCancel=this.handleCancel.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
    this.handleChange=this.handleChange.bind(this);
  }

  componentWillMount(){
            let item = this.props.itemSelected;
      if(item !== null){
      this.setState({
      task_id: item.id,
      task_name: item.name,
      task_level: item.level,
      });
      }
  }

  componentWillReceiveProps(nextProps){
                let item = nextProps.itemSelected;
      if(nextProps !== null){
      this.setState({
      task_id: item.id,
      task_name: item.name,
      task_level: item.level,
      });
      }
  } 

  handleChange(event){
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      // const value =target.value;
      const name = target.name;
      this.setState({
      [name]: value
      });
  }
  handleSubmit(){
    let item = {
      id : this.state.task_id,
      name: this.state.task_name,
      level: this.state.task_level,
    };

    this.props.onClickSubmit(item);
  }
  handleCancel(){
    this.props.onClickCancel();
  }

  render() {
    return (
                    <div className="row" style={{'paddingTop':'20px','paddingBottom':'20px'}}>
                      <div className="col-md-offset-7 col-md-5">
                        <form  method="POST" className="form-inline">
                          <div className="form-group">
                            <label  className="sr-only">Label</label>
                            <input type="text"  className="form-control" value={this.state.task_name} onChange={this.handleChange} placeholder="Task Name" name="task_name" />
                          </div>
                          <div className="form-group">
                            <label  className="sr-only">Label</label>
                            <select name="task_level" value={this.state.task_level} onChange={this.handleChange} id="inputDS" className="form-control" required="required">
                              <option value={0}>Small</option>
                              <option value={1}>Medium</option>{'}'}
                              <option value={2}>High</option>{'}'}
                            </select>
                          </div>
                          <button type="button" onClick={this.handleSubmit} className="btn btn-primary">Submit</button>
                          <button type="button" onClick={this.handleCancel} className="btn btn-default">Cancel</button>
                        </form>
                      </div>
                    </div>
    );
  }
}

export default Form;
