import React, { ReactNode, ReactElement } from 'react';
import './Overlay.css';
import PropTypes from 'prop-types';
import LocalPropTypes from 'local-prop-types';
import { positions } from './constants';

type OverlayProps = {
  children: ReactNode;
  className: string;
};

const Overlay = (props: OverlayProps): ReactElement => <div {...props} />;

Overlay.propTypes = {
  className: PropTypes.oneOf(positions).isRequired,
  children: LocalPropTypes.children,
};

export default Overlay;
