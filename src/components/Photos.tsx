import React, { ReactElement } from 'react';
import './Photos.css';
import LocalPropTypes from 'local-prop-types';
import PropTypes from 'prop-types';
import { Carousel } from 'react-bootstrap';
import { CarouselImage } from 'interfaces';
const { Item, Caption } = Carousel;

type Props = {
  images: Array<CarouselImage>;
};

const Photos = ({ images }: Props): ReactElement => (
  <div className="carousel-container">
    <Carousel>
      {images.map(({ src, alt, caption, id }) => (
        <Item key={id}>
          <img src={src} alt={alt} className="d-block w-100 carousel-image" />
          <Caption>{caption}</Caption>
        </Item>
      ))}
    </Carousel>
  </div>
);

Photos.propTypes = {
  images: PropTypes.arrayOf(LocalPropTypes.image).isRequired,
};

export default Photos;
