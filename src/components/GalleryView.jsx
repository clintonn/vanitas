import React, { Component } from 'react';
import style from './GalleryView.module.scss';
import ImagePanel from './ImagePanel';

export default class GalleryView extends Component {
  render() {
    return (
      <section className={style.Gallery}>
        <ImagePanel />
        <ImagePanel />
        <ImagePanel />
        <ImagePanel />
      </section>
    );
  }
}
