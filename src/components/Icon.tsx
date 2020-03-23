import React, { ReactElement } from 'react';
import PropTypes from 'prop-types';
import Octicon, { getIconByName, OcticonProps, iconsByName } from '@primer/octicons-react';
import iconOptions from './iconOptions';

function Icon({ name, ...props }: { name: keyof iconsByName } & Omit<OcticonProps, 'icon'>): React.ReactElement {
  return <Octicon {...props} icon={getIconByName(name)} />;
}
Icon.propTypes = {
  name: PropTypes.oneOf(iconOptions).isRequired,
};
export default Icon;
