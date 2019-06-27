import React from 'react';
import { connect } from 'react-redux';
// import moment from 'moment';
// import Loader from 'react-loader-spinner';
import { withRouter } from 'react-router-dom';

import AddBubl from './AddBubl';

import { getBubls } from '../actions';

class Bubls extends React.Component {
  state = {
    bubls: []
  }

  componentDidMount() {
    this.props.getBubls();
  }

  render() {
    return (
      <div className="delete-this-wrapper">
        <p>Bubls Component</p>
        <p>{console.log("Inside Bubls Return:", this.props)}</p>
        {this.props.bubls.map(bubl => {
          return (
            <p key={bubl.audit_id}>{bubl.topic}</p>
          )
        })}
        <AddBubl />
      </div>
    )
  }
}

const mapStoreStateToProps = ({ error, bubls, fetchingBubls }) => ({
  bubls,
  error,
  fetchingBubls
});

export default withRouter(
  connect(
    mapStoreStateToProps,
    { getBubls }
  )(Bubls)
);