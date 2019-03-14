import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getImages } from '../../../modules/selectors';
import { fetchSuccessImages } from '../../../modules/operations';

import CategoriesView from './CategoriesView';
import categories from '../../categories.json';

class CategoriesPage extends Component {
  state = {};

  componentDidMount() {
    this.props.fetchSuccessImages();
  }

  render() {
    const { images } = this.props;
    return <CategoriesView categories={categories} images={images} />;
  }
}

const mapState = state => ({
  images: getImages(state),
});

const mapDispatch = { fetchSuccessImages };

export default connect(
  mapState,
  mapDispatch,
)(CategoriesPage);
