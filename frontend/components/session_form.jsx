import React from 'react';
import { Link } from 'react-router';

class SessionForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      showForm: true
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.redirectIfLoggedIn = this.redirectIfLoggedIn.bind(this);
  }

  redirectIfLoggedIn() {
    if(this.props.loggedIn){
      this.setState({showForm: false});
    }
  }

  handleChange(field){
    return e => this.setState({[field]: e.target.value});
  }

  componentDidUpdate(){
    this.redirectIfLoggedIn();
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm(user);
  }

  form(){
    let title = (this.props.formType === 'login') ? 'Log In to Findaloo' : 'Sign Up for Finadaloo';
    return(
    <form onSubmit={this.handleSubmit}>
      <h1>{title}</h1>
      <p>Connect with great local restrooms</p>

      <input type="text" value={this.state.username}
        onChange={this.handleChange('username')}
        placeholder="username">
      </input>

      <input type="password" value={this.state.password}
        onChange={this.handleChange('password')}
        placeholder="password">
      </input>

      <input type="submit"></input>
    </form>);
  }


  render(){
    return(
      <authcontainer className="group">
        <div className="signup-logo"></div>
        <ul>
          <li>{this.props.errors}</li>
        </ul>
        {this.form()}
      </authcontainer>
    );
  }
}
export default SessionForm;
