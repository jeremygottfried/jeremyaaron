import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { LinkProps } from 'types';

const Brand = (props: LinkProps): ReactElement => <Link className="navbar-brand" {...props} />;

export default Brand;
