import React, { FC, ReactElement } from 'react';
import Photos from 'components/Photos';
import JeremySmiling from 'images/Jeremy-BW-Smiling.jpg';
import JeremyViolin from 'images/Jeremy-Violin.jpg';

const PhotosPage: FC = (): ReactElement => (
  <Photos
    images={[
      {
        src: JeremySmiling,
        alt: 'Jeremy Smiling',
        caption: '',
        id: 0,
      },
      {
        src: JeremyViolin,
        alt: 'Jeremy With Violin',
        caption: '',
        id: 1,
      },
    ]}
  />
);

export default PhotosPage;
