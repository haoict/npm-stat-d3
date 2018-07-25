import React from 'react';
import PropTypes from 'prop-types';
import { compose, pure, setPropTypes, defaultProps, withHandlers, withProps } from 'recompose';
import icons from 'configs/icons';
import { Svg } from 'components/styledComponents';

const Icon = ({ size, color, renderPath, renderRect, icon }) => (
  <Svg viewBox="0 0 1024 1024" size={size} color={color}>
    {icon.rects && icon.rects.map(renderRect)}
    {icon.paths && icon.paths.map(renderPath)}
  </Svg>
);

export default compose(
  defaultProps({
    color: '#555',
    sise: 16
  }),
  setPropTypes({
    color: PropTypes.string,
    size: PropTypes.number,
    name: PropTypes.string.isRequired
  }),
  withProps(({ name }) => ({
    icon: icons[name]
  })),
  withHandlers({
    renderPath: ({ color, name }) => (path, index) => (
      <path d={path.d} fill={path.fill || color} key={`${name}_path_${index}`} />
    ),
    renderRect: ({ color, name, size }) => (rect, index) => (
      <rect
        width={`${size}px`}
        height={`${size}px`}
        fill={rect.fill || color}
        key={`${name}_rect_${index}`}
      />
    )
  }),
  pure
)(Icon);
