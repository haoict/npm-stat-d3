import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { compose, pure, setPropTypes } from 'recompose';
import { Section, Container, HeaderLink } from 'components/styledComponents';
import Icon from 'components/icon';
import { colors } from 'configs/styles';

const CommonLayout = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={matchProps => (
      <Fragment>
        <Section>
          <Container>
            <HeaderLink to="/">
              <Icon name="logo" size={32} color={colors.orange} />
              <h2>NPM compare</h2>
            </HeaderLink>
          </Container>
        </Section>
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
