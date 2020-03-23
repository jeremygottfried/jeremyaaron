import React, { ReactElement } from 'react';
import { ChildrenProps } from 'types';
import { children } from 'local-prop-types';

export default function TextPageWrapper({ children }: ChildrenProps): ReactElement {
  return (
    <div className="container-fluid">
      <div className="col-md-8 mx-auto bg-secondary">{children}</div>
    </div>
  );
}

TextPageWrapper.propTypes = {
  children: children.isRequired,
};
