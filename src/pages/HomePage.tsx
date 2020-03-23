import React, { FC, ReactElement } from 'react';
import { ImageSection } from 'components/Section';
import { Link } from 'react-router-dom';
import Embed from 'components/Embed';
import JeremyGuitar from 'images/Jeremy-Guitar.jpg';

const HomePage: FC = (): ReactElement => (
  <div className="container-fluid">
    <ImageSection image={{ src: JeremyGuitar, alt: 'Jeremy with Guitar' }}>
      <ImageSection.Center>
        <h1 className="header">Jeremy Aaron</h1>
        <Link to="/Music" className="btn btn-lg btn-orange m-1 btn-sm-font">
          Take A Listen
        </Link>
        <Link to="/Bio" className="btn btn-lg btn-green m-1 btn-sm-font">
          Learn More
        </Link>
      </ImageSection.Center>
    </ImageSection>
    <Embed
      style={{
        border: 0,
        maxWidth: '700px',
        width: '100%',
        height: '120px',
      }}
    >
      {
        '<iframe style="border:0;width:100%;height120px;" src="https://bandcamp.com/EmbeddedPlayer/album=3871937043/size=large/bgcol=333333/linkcol=0f91ff/tracklist=false/artwork=small/transparent=true/" seamless><a href="http://jeremyaaron.bandcamp.com/album/in-the-magic-light">In The Magic Light by Jeremy Aaron</a></iframe>'
      }
    </Embed>
  </div>
);

export default HomePage;
