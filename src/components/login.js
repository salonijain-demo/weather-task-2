import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import './login.css';

class Login extends Component{
  state={
    username: '',
    password: '',
    redirect: false
  }
  handle = (event) =>{
    this.setState({
      [event.target.name]:event.target.value
    })
  }
  login = () => {
    if(this.props.username === this.state.username && this.props.password === this.state.password){
      this.setState({
        redirect:true
      })
    }
  }
  render(){
    if(this.state.redirect){
      return <Redirect to='/weatherDashboard' />
    }
    return(
      <div>
        <div className='login form-group col-lg-5'>
          <h1>Login</h1>
          <div className='col-lg-12 row'>
            Username:
            <input className='margin' type='text' name='username' value={this.state.username} onChange={this.handle}></input>
          </div>
          <div className='col-lg-12 row'>
            Password:
            <input className='margin' type='password' name='password' value={this.state.password} onChange={this.handle}></input>
          </div>
          <div>
            <button className='margin' className='btn btn-primary' onClick={this.login}>Login</button>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  username:state.username,
  password:state.password,
})

export default connect(mapStateToProps)(Login);