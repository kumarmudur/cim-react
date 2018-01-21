import React, { Component } from 'react';
import '../css/Login.css';

class Login extends Component {
  constructor() {
    super();
    this.submitLogin = this.submitLogin.bind(this);
  }

  submitLogin() {
    if ((this.username.value === '' || this.username.value === undefined) && (this.password.value === ''|| this.password.value === undefined)) {
      alert('Please enter valid login credentials');
    } else if (this.username.value === '' || this.username.value === undefined) {
      alert('Please enter username');
    } else if (this.password.value === '' || this.password.value === undefined) {
      alert('Please enter password');
    } else {
      if (this.username.value !== 'admin' && this.password.value !== '123') {
        alert('Invalid username or password');
      } else {
        alert('user is authenticated');
      }
    }

  }

  render() {
    return (
      <div>
        <div className="container-fluid">
            <div className="row col-md-8 col-lg-8">
                <p className="header-name">Central Inventory Management</p>
            </div>
        </div>
        <form className="login-container">
          <input type="text" name="username" ref={ uid => this.username = uid } className="input-group" id="username" placeholder="Username" />
          <input type="password" name="password" ref={ pwd => this.password = pwd} className="input-group" id="password" placeholder="Password" />
          <button type="submit" name="submit" className="login-btn btn-primary" onClick={this.submitLogin}>Login</button>
        </form>
      </div>
    )
  }
}

export default Login;
