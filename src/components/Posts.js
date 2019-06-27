import React from 'react';
import { connect } from 'react-redux';
// import moment from 'moment';
// import Loader from 'react-loader-spinner';
import { withRouter } from 'react-router-dom';

import { getPosts } from '../actions';

class Posts extends React.Component {
  componentDidMount() {
    this.props.getPosts();
  }

  render() {
    return (
      <p>Posts Component</p>
    )
  }
}

const mapStateToProps = ({ error, posts, fetchingPosts }) => ({
  error,
  posts,
  fetchingPosts
});

export default withRouter(
  connect(
    mapStateToProps,
    { getPosts }
  )(Posts)
);