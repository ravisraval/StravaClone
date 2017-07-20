import React from 'react';
import { Link, withRouter } from 'react-router-dom';




class LandingHeader extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemoLogin = this.handleDemoLogin.bind(this);
  }

  

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleDemoLogin(e) {
    e.preventDefault();
    this.props.login({username:"Demo User", password:"guacamole"}).then(this.props.history.push('/api/workouts'));
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.login(user);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.loggedIn) {this.props.history.push('/api/workouts')};
  }

  render() {

    return (
      <div className="landing-header">
        <ul>
          <li>
            <h3>RunAWay</h3>
          </li>

          <li>
            <form onSubmit={this.handleSubmit} className="login-form">
                <input type="text" placeholder="Username"
                   value={this.state.username}
                   onChange={this.update('username')}
                   className="signup-input"/>

                 <input type="password" placeholder="Password"
                    value={this.state.password}
                    onChange={this.update('password')}
                    className="signup-input"
                  />
                <button className="login-button" type="submit">Log In</button>
            </form>
          </li>
          <li><button onClick={this.handleDemoLogin}>Demo Login</button></li>
        </ul>
      </div>
    );
  }
}

export default withRouter(LandingHeader);