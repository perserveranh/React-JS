import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      txtUsername: 'tuan.anh.257.it@gmail.com',
      txtPassword: 'vutu4n4nh',
      textDesc   : '><><><><><',
      sltSex     :0,
      rdlangu    :'vi',
      ckbStatus  :true

    };
  }

  handleChange = (event) =>{
    var target=event.target;
    var name=target.name;
    var value=target.type === 'checkbox' ? target.value : target.checkbox;
    this.setState({
      [name]:value
    });

  }

  handleSubmit = (event) =>{
    event.preventDefault();
    console.log(this.state);
  }
  render() {
    return (
        <div className="container mt-30">
          <div className="row">
            <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
              <div className="panel panel-primary">
                <div className="panel-heading">
                  <h3 className="panel-title">Form</h3>
                </div>
                <div className="panel-body">
                  <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                      <label >Username</label>
                      <input 
                      type="text"
                      className="form-control" 
                      name="txtUsername" 
                      onChange={this.handleChange} 
                      value={this.state.txtUsername}
                      />
                    </div>
                    <div className="form-group">
                      <label >Password</label>
                      <input
                      type="password"
                      className="form-control"
                      name="txtPassword"
                      onChange={this.handleChange}
                      value={this.state.txtPassword}
                      />
                    </div>
                    <div className="form-group">
                      <label>Mo ta</label>
                      <textarea 
                      name="textDesc"  
                      className="form-control" 
                      rows="3"
                      onChange={this.handleChange} value={this.state.textDesc}>
                      </textarea>
                    </div>
                    <span >Gioi tinh</span>
                    <select name='sltSex' className="form-control" value={this.state.sltSex} onChange={this.handleChange} >
                      <option value={0}>Nu</option>
                      <option value={1} selected={this.state ===1}>Nam</option>
                    </select>
                     <div className="radio">
        <label>
          <input type="radio" name="rdlangu"  value="en" onChange={this.handleChange} />
          English
        </label> <br /> 
        <label>
          <input type="radio" name="rdlangu" value="vi" onChange={this.handleChange} checked={this.state.rdlangu === "vi"}/>
          Vietnamese
        </label>
      </div>
      <div className="checkbox">
        <label>
          <input 
          type="checkbox"
          name="ckbStatus"
          value={true}
          onChange={this.handleChange} 
          checked={this.state.ckbStatus===true}
          />
          Status
        </label>
      </div>
                    <button type="submit" className="btn btn-primary" >Submit</button>
                    <button type="reset" className="btn btn-default">Xoa trang</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default App;
