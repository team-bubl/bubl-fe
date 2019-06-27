import React from 'react';
import { connect } from 'react-redux';
// import moment from 'moment';
// import Loader from 'react-loader-spinner';
import { withRouter } from 'react-router-dom';

import { getComments } from '../actions';

class Comments extends React.Component {
  componentDidMount() {
    this.props.getComments();
  }

  render() {
    return (
      <p>Comments Component</p>
    )
  }
}

const mapStateToProps = ({ error, comments, fetchingComments }) => ({
  error,
  comments,
  fetchingComments
});

export default withRouter(
  connect(
    mapStateToProps,
    { getComments }
  )(Comments)
);