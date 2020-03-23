import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { LinkProps } from 'types';

const NavLink = (props: LinkProps): ReactElement => (
  <li className="nav-item">
    <Link className="nav-link" {...props} />
  </li>
);

export default NavLink;
