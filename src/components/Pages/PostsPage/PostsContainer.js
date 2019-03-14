import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostsView from './PostsView';
import { fetchSuccessPosts } from '../../../modules/operations';
import { getPosts } from '../../../modules/selectors';

class PostsPage extends Component {
  state = { random: 0 };

  componentDidMount() {
    this.props.fetchSuccessPosts();
    this.handleBtnClick();
  }

  handleBtnClick = () => {
    this.setState({ random: Math.floor(Math.random() * 20) });
  };

  render() {
    const { random } = this.state;
    const { posts } = this.props;

    return (
      <div>
        <PostsView
          random={random}
          post={posts[random]}
          handleBtn={this.handleBtnClick}
        />
      </div>
    );
  }
}

const mapState = state => ({
  posts: getPosts(state),
});

const mapDispatch = { fetchSuccessPosts };

export default connect(
  mapState,
  mapDispatch,
)(PostsPage);
