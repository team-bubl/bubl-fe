import React from 'react';
import { connect } from 'react-redux';
// import moment from 'moment';
import Loader from 'react-loader-spinner';
import { withRouter } from 'react-router-dom';

import { getData } from '../actions';

class Dashboard extends React.Component {

  componentDidMount() {
    this.props.getData();
  }

  render() {
    return (
      <div className="delete-this-div">
        <p>Dashboard</p>
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
      </div>
    )
  }
}

const mapStateToProps = ({ error, someData, fetchingData }) => ({
  error,
  someData,
  fetchingData
});

export default withRouter(
  connect(
    mapStateToProps,
    { getData }
  )(Dashboard)
);