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
      this.props.router.replace('/')
    }
  }

  handleChange(field){
    return e => this.setState({[field]: e.target.value});
  }

  componentDidUpdate(){
    console.log("yo")
    this.redirectIfLoggedIn();
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm(user);
  }

  includeAlternativeSignIn(){
    if (this.props.formType === 'signup'){
      return(
        <small>Already on Findaloo? <Link to="/login" className="alt-link">Log in</Link></small>
      )
    } else {
      return (
        <small>New to Findaloo? <Link to="/signup" className="alt-link">Sign up!</Link></small>
      )
    }
  }

  form(){
    let title = (this.props.formType === 'login') ? 'Log In to Findaloo' : 'Sign Up for Finadaloo';

    let errors

    if (this.props.errors.length > 0) {
      errors = this.props.errors.map((error, idx) => (<li key={idx}>{error}</li>))
    }

    return(

    <form onSubmit={this.handleSubmit}>
      <h1>{title}</h1>
      <p>Connect with great local restrooms</p>

        <ul>
          {errors}
        </ul>

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
        <img src={window.findalooAssets.signup_illustration} className="signup-logo">
        </img>

        {this.form()}
        {this.includeAlternativeSignIn()}
      </authcontainer>
    );
  }
}
export default SessionForm;
