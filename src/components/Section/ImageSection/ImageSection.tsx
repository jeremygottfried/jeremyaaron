import React, { ReactElement, Component } from 'react';
import './ImageSection.css';
import OverlayFactory from './OverlayFactory';
import { Image } from 'interfaces';

type ImageSectionProps = {
  children: ReactElement;
  image: Image;
};

class ImageSection extends Component<ImageSectionProps> {
  static Center = OverlayFactory({ position: 'center' });
  static TopLeft = OverlayFactory({ position: 'top-left' });
  static TopRight = OverlayFactory({ position: 'top-right' });
  static BottomLeft = OverlayFactory({ position: 'bottom-left' });
  static BottomRight = OverlayFactory({ position: 'bottom-right' });

  render(): ReactElement {
    const { image, children } = this.props;
    return (
      <div
        className="image-section"
        style={{
          backgroundImage: `linear-gradient(269deg, rgba(0,0,0,0.14) 20%, rgba(0,0,0,0.73) 63%, #000 100%),url(${image.src})`,
        }}
        aria-label={image.alt}
      >
        {children}
      </div>
    );
  }
}

export default ImageSection;
