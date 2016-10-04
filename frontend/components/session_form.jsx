import React from 'react';
import { Link } from 'react-router';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.redirectIfLoggedIn = this.redirectIfLoggedIn.bind(this);
  }

  redirectIfLoggedIn() {
    if(this.props.loggedIn){
      this.props.router.push("/");
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    console.log({user});
    console.log(user);
    this.props.processForm(user);
  }


  handleChange(field){
    return e => this.setState({[field]: e.target.value});
    // this.setState({ })
  }
  componentDidUpdate(){
    this.redirectIfLoggedIn();
  }

  render(){
    let title = (this.props.formType === "signup") ? "Sign Up" : "Log In";
    let nontitle = (this.props.formType === "signup") ? "Log In" : "Sign Up";
    let url = (this.props.formType === "signup") ? "login" : "signup";
    return(
      <div>
        <h1>{title}</h1>
        <p>{this.props.errors}</p>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.username}
            onChange={this.handleChange('username')}
            placeholder="username">
          </input>

          <input type="password" value={this.state.password}
            onChange={this.handleChange('password')}
            placeholder="password">
          </input>

          <input type="submit"></input>
        </form>

        <Link to={"/" + url}>{nontitle}</Link>
      </div>
    );
  }
}
export default SessionForm;
