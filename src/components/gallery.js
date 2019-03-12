import React from 'react';
import { render } from 'react-dom';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';

import gallery01 from '../assets/images/gallery01.jpg';
import gallery02 from '../assets/images/gallery02.jpg';
import gallery03 from '../assets/images/gallery03.jpg';
import gallery04 from '../assets/images/gallery04.jpg';
import gallery05 from '../assets/images/gallery05.jpg';
import gallery06 from '../assets/images/gallery06.jpg';
import gallery07 from '../assets/images/gallery07.jpg';
import gallery08 from '../assets/images/gallery08.jpg';
import gallery09 from '../assets/images/gallery09.jpg';
import gallery11 from '../assets/images/gallery11.jpg';
import gallery12 from '../assets/images/gallery12.jpg';
import gallery13 from '../assets/images/gallery13.jpg';
import gallery14 from '../assets/images/gallery14.jpg';
import gallery15 from '../assets/images/gallery15.jpg';
import gallery16 from '../assets/images/gallery16.jpg';
import gallery17 from '../assets/images/gallery17.jpg';
import gallery18 from '../assets/images/gallery18.jpg';
import gallery19 from '../assets/images/gallery19.jpg';
import gallery20 from '../assets/images/gallery20.jpg';
import gallery21 from '../assets/images/gallery21.jpg';
import gallery22 from '../assets/images/gallery22.jpg';
import gallery23 from '../assets/images/gallery23.jpg';
import gallery24 from '../assets/images/gallery24.jpg';
import gallery25 from '../assets/images/gallery25.jpg';
import gallery26 from '../assets/images/gallery26.jpg';
import gallery27 from '../assets/images/gallery27.jpg';
import gallery28 from '../assets/images/gallery28.jpg';
import gallery29 from '../assets/images/gallery29.jpg';

const photos = [
  { src: gallery01, width: 4, height: 2 },
  { src: gallery02, width: 1, height: 1 },
  { src: gallery03, width: 4, height: 2 },
  { src: gallery05, width: 2, height: 2 },
  { src: gallery04, width: 3, height: 3 },
  { src: gallery06, width: 4, height: 2 },
  { src: gallery07, width: 3, height: 4 },
  { src: gallery08, width: 4, height: 2 },
  { src: gallery09, width: 3, height: 2 },
  { src: gallery11, width: 3, height: 1 },
  { src: gallery12, width: 3, height: 2 },
  { src: gallery13, width: 2, height: 2 },
  { src: gallery14, width: 4, height: 2 },
  { src: gallery15, width: 2, height: 2 },
  { src: gallery16, width: 2, height: 2 },
  { src: gallery17, width: 2, height: 2 },
  { src: gallery18, width: 2, height: 1 },
  { src: gallery21, width: 4, height: 2 },
  { src: gallery26, width: 4, height: 3 },
  { src: gallery29, width: 4, height: 2 },
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

  render() {
    return (
      <div className="fit">
        <Gallery photos={this.props.full ? photos : photos.slice(0, 6)} onClick={this.openLightbox} />
        <Lightbox
          images={photos}
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
