import React from 'react';
import PropTypes from 'prop-types';
import AirBnbPropTypes from 'airbnb-prop-types'

const BandCamp = ({
  theme,
  linkColor,
}) => {
  
  return (
    <iframe
      style="border: 0; width: 100%; height: 120px;"
      src="https://bandcamp.com/EmbeddedPlayer/album=3871937043/size=large/bgcol=333333/linkcol=0f91ff/tracklist=false/artwork=small/transparent=true/"
      seamless
    >
      <a href="http://jeremyaaron.bandcamp.com/album/in-the-magic-light">
        In The Magic Light by Jeremy Aaron
      </a>
    </iframe>
)}

BandCamp.default = {
  theme: 'dark',
  linkColor: 'blue',
};

BandCamp.propTypes = {
  theme: PropTypes.oneOf(['light', 'dark']),
  linkColor: PropTypes.oneOf(['blue', 'orange', 'green', 'purple', 'pink', 'cerulean', 'red', 'black']),
};

const Slim = () => {

}

Slim.defaultProps = {
  showArtwork: true,
  width: 'auto',
};

Slim.propTypes = {
  showArtwork: PropTypes.bool,
  width: AirBnbPropTypes.between({ gte: 170, lte: 700 }),
};

const ArtworkOnly = () => {

}

ArtworkOnly.defaultProps = {
  width: 350,
};

ArtworkOnly.propTypes = {
  width: AirBnbPropTypes.between({ gte: 170, lte: 700 }),
}
const Standard = () => {

}

Standard.defaultProps = {
  artworkSize: 'big',
  width: 'auto',
  showTracklist: false,
}

Standard.propTypes = {
  artworkSize: PropTypes.oneOf(['big', 'small']),
  width: AirBnbPropTypes.between({ gte: 170, lte: 700 }),
  showTracklist: PropTypes.bool,
};
