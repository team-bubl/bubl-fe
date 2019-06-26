import React from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';

import { signup, getSchools } from '../actions';

class Signup extends React.Component {

  state = {
    newUser: {
      username: '',
      password: '',
      audit_id: ''
    },
    schoolData: []
  };

  componentDidMount() {
    this.props.getSchools();
  }

  handleChange = e => {
    this.setState({
      newUser: {
        ...this.state.newUser,
        [e.target.name]: e.target.value
      }
    });
  };

  signup = e => {
    e.preventDefault();
    this.props.signup(this.state)
      .then(res => {
        if (res) {
          this.props.history.push('/protected');
        }
      })
  };



  render() {
    return (
      <div className="delete-this-div">
        <form onSubmit={this.signup}>
          <select name="audit_id" value={this.state.audit_id} onChange={this.handleChange}>
            {this.props.schoolData.map(hs => {
              return <option key={hs.audit_id} value={hs.audit_id}>{hs.school}</option>
            })}
          </select>
          <input
            type="text"
            name="username"
            value={this.state.newUser.username}
            onChange={this.handleChange}
          />
          <input
            type="password"
            name="password"
            value={this.state.newUser.password}
            onChange={this.handleChange}
          />
          <button>
            {this.props.signingUp ? (
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
  signingUp: state.signingUp,
  fetchingSchool: state.fetchingSchool,
  schoolData: state.schoolData
});

export default connect(
  mapStateToProps,
  { signup, getSchools }
)(Signup);
