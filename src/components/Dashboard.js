import React from 'react';
import { connect } from 'react-redux';
// import moment from 'moment';
// import Loader from 'react-loader-spinner';
import { withRouter } from 'react-router-dom';

// import Bubl from './Bubl';
// import Posts from './Posts';
// import Comments from './Comments';

import { getUser } from '../actions';

class Dashboard extends React.Component {

  state = {
    user: {
      username: ''
    }
  }

  componentDidMount() {
    this.props.getUser();
  }

  logout = () => {
    localStorage.removeItem('token');
    this.setState({});
  }

  render() {
    return (
      <div className="delete-this-div">
        <p>Dashboard</p>
        <button onClick={this.logout}>Log Out</button>
        {/* Uncomment below to fetch data */}
        {/* {this.props.fetchingData && (
          <div className="key spinner">
            <Loader type="Puff" color="#204963" height="60" width="60" />
            <p>Loading Data</p>
          </div>
        )}
        {this.props.error && <h4>{this.props.error}</h4>}
        {!this.fetchingData && someData.length > 0 && (
          <div className="data-display-wrapper">
            <p>Fetched Data</p>
          </div>
        )} */}

        {/* Bubl Component, uncoment import above as well */}
        {/* <Bubl /> */}

        {/* Posts component, uncomment import above as well */}
        {/* <Posts /> */}

        {/* Comments component, uncomment import above as well */}
        {/* <Comments /> */}
      </div>
    )
  }
}

const mapStateToProps = ({ error, school, fetchingUser }) => ({
  error,
  school,
  fetchingUser
});

export default withRouter(
  connect(
    mapStateToProps,
    { getUser }
  )(Dashboard)
);