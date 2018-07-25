import React from 'react';
import PropTypes from 'prop-types';
import { compose, pure, setPropTypes } from 'recompose';
import { Container, Form, FormInput, FormHeader } from 'components/styledComponents';

const SearchForm = ({ onSubmit, onChange, inputValue }) => {
  console.log(inputValue)

  return (
    <Container>
      <FormHeader>Compare package download counts over time</FormHeader>
      <form onSubmit={onSubmit}>
        <FormInput value={inputValue} onChange={onChange} placeholder="Enter an npm package..." />
      </form>
    </Container>
  );
};

export default compose(
  setPropTypes({
    inputValue: PropTypes.string,
    onSubmit: PropTypes.func,
    onChange: PropTypes.func
  }),
  pure
)(SearchForm);
