import PropTypes from 'prop-types';
import url from 'url-prop-type';
const children = PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node, PropTypes.string]);
const image = PropTypes.shape({
  src: PropTypes.string,
  caption: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  alt: PropTypes.string,
  id: PropTypes.number,
});

const style = PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number]));

const exports = { children, image, url, style };
export { children, image, url, style };
export default exports;
