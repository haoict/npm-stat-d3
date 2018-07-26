import React from 'react';
import PropTypes from 'prop-types';
import { compose, pure, setPropTypes } from 'recompose';
import { Container, Form, FormInput } from 'components/styledComponents';

const SearchForm = ({ onSubmit, onChange, inputValue }) => (
  <Container>
    <Form onSubmit={onSubmit}>
      <FormInput value={inputValue} onChange={onChange} placeholder="Enter an npm package..." />
    </Form>
  </Container>
);

export default compose(
  setPropTypes({
    inputValue: PropTypes.string,
    onSubmit: PropTypes.func,
    onChange: PropTypes.func
  }),
  pure
)(SearchForm);
