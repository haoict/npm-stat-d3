import { connect } from 'react-redux';
import { compose, pure, withState, withHandlers } from 'recompose';
import { updatePackage } from 'actions';
import SearchForm from 'components/searchForm';

export default compose(
  connect(null, { updatePackage }),
  withState('inputValue', 'updateInputValue', ''),
  withHandlers({
    onChange: ({ updateInputValue }) => e => {
      updateInputValue(e.target.value);
    },
    onSubmit: props => e => {
      e.preventDefault();
      props.updatePackage(props.inputValue);
      props.updateInputValue('');
    }
  }),
  pure
)(SearchForm);
