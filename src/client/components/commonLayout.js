import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { compose, pure, setPropTypes } from 'recompose';
import Header from 'components/header';

const CommonLayout = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={matchProps => (
      <Fragment>
        <Header {...matchProps} />
        <Component {...matchProps} />
      </Fragment>
    )}
  />
);

export default compose(
  setPropTypes({
    component: PropTypes.any
  }),
  pure
)(CommonLayout);
