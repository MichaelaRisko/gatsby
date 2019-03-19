import React from 'react';
import ReactGallery from 'react-photo-gallery';
import Lightbox from 'react-images';

import catalog01 from '../assets/images/gallery/catalog/gallery01.jpg';
import catalog02 from '../assets/images/gallery/catalog/gallery02.jpg';
import catalog03 from '../assets/images/gallery/catalog/gallery03.jpg';
import catalog04 from '../assets/images/gallery/catalog/gallery04.jpg';
import catalog05 from '../assets/images/gallery/catalog/gallery05.jpg';
import catalog06 from '../assets/images/gallery/catalog/gallery06.jpg';
import catalog07 from '../assets/images/gallery/catalog/gallery07.jpg';
import catalog08 from '../assets/images/gallery/catalog/gallery08.jpg';
import catalog09 from '../assets/images/gallery/catalog/gallery09.jpg';
import catalog11 from '../assets/images/gallery/catalog/gallery11.jpg';
import catalog12 from '../assets/images/gallery/catalog/gallery12.jpg';
import catalog13 from '../assets/images/gallery/catalog/gallery13.jpg';
import catalog14 from '../assets/images/gallery/catalog/gallery14.jpg';
import catalog15 from '../assets/images/gallery/catalog/gallery15.jpg';
import catalog16 from '../assets/images/gallery/catalog/gallery16.jpg';
import catalog17 from '../assets/images/gallery/catalog/gallery17.jpg';
import catalog18 from '../assets/images/gallery/catalog/gallery18.jpg';
import catalog21 from '../assets/images/gallery/catalog/gallery21.jpg';
import catalog26 from '../assets/images/gallery/catalog/gallery26.jpg';
import catalog29 from '../assets/images/gallery/catalog/gallery29.jpg';


import img001 from '../assets/images/gallery/001.jpg';
import img002 from '../assets/images/gallery/002.jpg';
import img003 from '../assets/images/gallery/003.jpg';
import img004 from '../assets/images/gallery/004.jpg';
import img005 from '../assets/images/gallery/005.jpg';
import img006 from '../assets/images/gallery/006.jpg';
import img007 from '../assets/images/gallery/007.jpg';
import img008 from '../assets/images/gallery/008.jpg';
import img009 from '../assets/images/gallery/009.jpg';

const mobil = [
  { src: img001, width: 3, height: 2 },
  { src: img002, width: 3, height: 2 },
  { src: img003, width: 3, height: 2 },
  { src: img004, width: 4, height: 2 },
  { src: img009, width: 1, height: 1 },
  { src: img008, width: 3, height: 2 },
  { src: img006, width: 2, height: 2 },
  { src: img007, width: 4, height: 2 },
  { src: img005, width: 2, height: 2 },
];

const photos = [
  { src: catalog01, width: 4, height: 2 },
  { src: catalog02, width: 1, height: 1 },
  { src: catalog03, width: 4, height: 2 },
  { src: catalog05, width: 2, height: 2 },
  { src: catalog04, width: 3, height: 3 },
  { src: catalog06, width: 4, height: 2 },
  { src: catalog07, width: 3, height: 4 },
  { src: catalog08, width: 4, height: 2 },
  { src: catalog09, width: 3, height: 2 },
  { src: catalog11, width: 3, height: 1 },
  { src: catalog12, width: 3, height: 2 },
  { src: catalog13, width: 2, height: 2 },
  { src: catalog14, width: 4, height: 2 },
  { src: catalog15, width: 2, height: 2 },
  { src: catalog16, width: 2, height: 2 },
  { src: catalog17, width: 2, height: 2 },
  { src: catalog18, width: 2, height: 1 },
  { src: catalog21, width: 4, height: 2 },
  { src: catalog26, width: 4, height: 3 },
  { src: catalog29, width: 4, height: 2 },
];

class GalleryComponent extends React.Component {
  constructor() {
    super();
    this.state = { currentImage: 0 };
    this.closeLightbox = this.closeLightbox.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
  }

  openLightbox(event, obj) {
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true,
    });
  }

  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  }

  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  }

  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  }

  result() {
    if (this.props.full) {
      return mobil.concat(photos);
    }
    return photos.slice(0, 6);
  }

  render() {
    return (
      <div className="fit">
        <ReactGallery photos={this.result()} onClick={this.openLightbox} />
        <Lightbox
          images={this.result()}
          onClose={this.closeLightbox}
          onClickPrev={this.gotoPrevious}
          onClickNext={this.gotoNext}
          currentImage={this.state.currentImage}
          isOpen={this.state.lightboxIsOpen}
        />
      </div>
    );
  }
}

export default GalleryComponent;
