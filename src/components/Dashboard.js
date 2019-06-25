import React from 'react';
import { connect } from 'react-redux';
// import moment from 'moment';
import Loader from 'react-loader-spinner';
import { withRouter } from 'react-router-dom';

import { getGata } from '../actions';

class Dashboard extends React.Component {

  componentDidMount() {
    this.props.getData();
  }

  render() {
    return (
      <div className="delete-this-div">
        <p>Dashboard</p>
      </div>
    )
  }
}

const mapStateToProps = () => { };

export default withRouter(
  connect(
    mapStateToProps,
    {}
  )(Dashboard)
);