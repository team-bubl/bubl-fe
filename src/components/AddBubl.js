import React from 'react';
import { connect } from 'react-redux';
// import moment from 'moment';
// import Loader from 'react-loader-spinner';
import { withRouter } from 'react-router-dom';

import { addBubl } from '../actions';

class AddBubl extends React.Component {

  state = {
    topic: ''
  }

  componentDidMount() {

  }

  handlechange = e => {
    this.setState({ topic: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.addBubl();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Add Bubl by Topic:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

const mapStateToProps = ({ error, topic, addingBubl }) => ({
  error,
  topic,
  addingBubl
});

export default withRouter(
  connect(
    mapStateToProps,
    { addBubl }
  )(AddBubl)
);