import React from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';

import { signup } from '../actions';

class Signup extends React.Component {

  state = {
    newCredentials: {
      school: '',
      username: '',
      password: ''
    }
  };

  handleChange = e => {
    this.setState({
      newCredentials: {
        ...this.state.newCredentials,
        [e.target.name]: e.target.value
      }
    });
  };

  signup = e => {
    e.preventDefault();
    this.props.signup(this.state.newCredentials)
      .then(res => {
        if (res) {
          this.props.history.push('/protected');
        }
      })
  };



  render() {
    // TODO add school selector list
    return (
      <div className="delete-this-div">
        <form onSubmit={this.login}>
          <input
            type="text"
            name="username"
            value={this.state.newCredentials.username}
            onChange={this.handleChange}
          />
          <input
            type="password"
            name="password"
            value={this.state.newCredentials.password}
            onChange={this.handleChange}
          />
          <button>
            {this.props.loggingIn ? (
              <Loader type="ThreeDots" color="#1f2a38" height="12" width="26" />
            ) : (
                'Sign Up'
              )}
          </button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  error: state.error,
  signingUp: state.signingUp
});

export default connect(
  mapStateToProps,
  { signup }
)(Signup);
