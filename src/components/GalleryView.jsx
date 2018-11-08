import React, { Component } from 'react';
import galleryStyle from './GalleryView.module.scss';
import ImagePanel from './ImagePanel';

export default class GalleryView extends Component {
  render() {
    return (
      <section className={galleryStyle.gallery}>
        <ImagePanel />
        <ImagePanel />
        <ImagePanel />
        <ImagePanel />
      </section>
    );
  }
}
