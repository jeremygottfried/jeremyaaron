import React, { FC, ReactElement } from 'react';
import Embed from 'components/Embed';

const MusicPage: FC = (): ReactElement => (
  <Embed>
    {
      '<iframe style="border: 0; width: 700px; height: 1136px;" src="https://bandcamp.com/EmbeddedPlayer/album=3871937043/size=large/bgcol=333333/linkcol=0f91ff/transparent=true/" seamless><a href="http://jeremyaaron.bandcamp.com/album/in-the-magic-light">In The Magic Light by Jeremy Aaron</a></iframe>'
    }
  </Embed>
);

export default MusicPage;
