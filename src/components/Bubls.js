import React from 'react';
import { connect } from 'react-redux';
// import moment from 'moment';
// import Loader from 'react-loader-spinner';
import { withRouter } from 'react-router-dom';

import { getBubls } from '../actions';

class Bubls extends React.Component {
  componentDidMount() {
    this.props.getBubls();
  }

  render() {
    return (
      <p>Bubls Component</p>
    )
  }
}

const mapStateToProps = ({ error, bubls, fetchingBubls }) => ({
  error,
  bubls,
  fetchingBubls
});

export default withRouter(
  connect(
    mapStateToProps,
    { getBubls }
  )(Bubls)
);