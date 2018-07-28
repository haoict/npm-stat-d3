import React from 'react';
import PropTypes from 'prop-types';
import { compose, pure, setPropTypes, lifecycle, withHandlers, withState } from 'recompose';
import { isEmpty } from 'lodash';
import { Container, Form, FormInput } from 'components/styledComponents';
import { addPackage } from 'utils';

const SearchForm = ({ onSubmit, onChange, inputValue }) => (
  <Container>
    <Form onSubmit={onSubmit}>
      <FormInput value={inputValue} onChange={onChange} placeholder="Enter an npm package..." />
    </Form>
  </Container>
);

export default compose(
  setPropTypes({
    match: PropTypes.object,
    history: PropTypes.object,
    packages: PropTypes.array,
    updatePackages: PropTypes.func
  }),
  withState('inputValue', 'updateInputValue', ''),
  withHandlers({
    onChange: ({ updateInputValue }) => e => {
      updateInputValue(e.target.value);
    },
    onSubmit: ({ packages, inputValue, updatePackages, history, updateInputValue }) => e => {
      e.preventDefault();

      const newPackages = addPackage(packages, inputValue);
      updatePackages(newPackages);
      history.push(`/${newPackages.join('-vs-')}`);
      updateInputValue('');
    }
  }),
  lifecycle({
    componentDidMount() {
      const {
        match: { params },
        updatePackages
      } = this.props;

      if (!isEmpty(params.query)) {
        updatePackages(params.query.split('-vs-'));
      }
    },
    componentDidUpdate(prevProps) {
      const {
        match: { params },
        updatePackages
      } = this.props;

      if (
        JSON.stringify(params) !== JSON.stringify(prevProps.match.params) &&
        !isEmpty(params.query)
      ) {
        updatePackages(params.query.split('-vs-'));
      }
    }
  }),
  pure
)(SearchForm);
