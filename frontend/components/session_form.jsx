import React from 'react';
import { Link } from 'react-router';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      showForm: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.redirectIfLoggedIn = this.redirectIfLoggedIn.bind(this);
    this.revealForm = this.revealForm.bind(this);
      this.hideForm = this.hideForm.bind(this);
  }

  redirectIfLoggedIn() {
    if(this.props.loggedIn){
      hashHistory.push("/");
    }
  }

  revealForm() {
    this.setState({showForm: true});
  }

  hideForm() {
    this.setState({showForm: false});
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
    console.log({user});
    console.log(user);
    this.props.processForm(user);
  }

  render(){



    let title = (this.props.formType === "signup") ? "Sign Up" : "Log In";
    let nontitle = (this.props.formType === "signup") ? "Log In" : "Sign Up";
    let url = (this.props.formType === "signup") ? "login" : "signup";

    if (this.state.showForm) {
      return(
        <div>

          <li><Link to="/signup" onMouseEnter={this.revealForm} onMouseLeave={this.hideForm} className="nav signup">Sign Up</Link></li>
          <li><Link to="/login" onMouseEnter={this.revealForm} onMouseLeave={this.hideForm} className="nav login">Log In</Link></li>

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

        </div>
      );
    } else {
      return(
        <div>
          <li><Link to="/signup" onMouseEnter={this.revealForm} onMouseLeave={this.hideForm} className="nav signup">Sign Up</Link></li>
          <li><Link to="/login" onMouseEnter={this.revealForm} onMouseLeave={this.hideForm} className="nav login">Log In</Link></li>
        </div>
      );
    }
  }
}
export default SessionForm;
