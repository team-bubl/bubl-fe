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

  // componentDidMount() {
  //   console.log("CDM");
  // }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
    console.log("handleChange() e.target.value:", e.target.value);
    console.log("handleChange() e.target.name:", e.target.name);
    console.log("handleChange() this.state.topic:", this.state.topic);
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.addBubl(this.state);
    this.setState({
      topic: ''
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Add Bubl by Topic:
          <input type="text" name="topic" value={this.state.topic} onChange={this.handleChange} />
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