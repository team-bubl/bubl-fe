import React from 'react';
import { connect } from 'react-redux';
// import moment from 'moment';
// import Loader from 'react-loader-spinner';
import { withRouter } from 'react-router-dom';

import { getBubl } from '../actions';

class Bubl extends React.Component {
  componentDidMount() {
    this.props.getBubl();
  }

  render() {
    return (
      <p>Bubl Component</p>
    )
  }
}

const mapStateToProps = ({ error, bubl, fetchingBubl }) => ({
  error,
  bubl,
  fetchingBubl
});

export default withRouter(
  connect(
    mapStateToProps,
    { getBubl }
  )(Bubl)
);