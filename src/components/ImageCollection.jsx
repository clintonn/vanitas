import React, { Component, Fragment } from 'react';

export default class ImageCollection extends Component {
  constructor(props) {
    super(props);
    this.state = { currentIndex: 0 };
  }

  render() {
    return (
      <Fragment>
        Hello Image Collection
      </Fragment>
    );
  }
}
