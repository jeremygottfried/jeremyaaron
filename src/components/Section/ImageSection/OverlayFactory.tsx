import React, { ReactElement, ReactNode, FC } from 'react';
import Overlay from './Overlay';
import { kebabToCamel } from 'helpers';

export default function OverlayFactory(outerProps: { position: string }): FC<{ children: ReactNode }> {
  const { position } = outerProps;
  const Component = (innerProps: { children: ReactNode }): ReactElement => (
    <Overlay className={position} {...innerProps} />
  );
  Component.displayName = kebabToCamel(position);

  return Component;
}
