import { ReactNode } from 'react';

export interface Image {
  src: string;
  alt: string;
}

export interface CarouselImage extends Image {
  caption: string | ReactNode;
  id: number;
}
