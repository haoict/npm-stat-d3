import { combineReducers } from 'redux';
import { UPDATE_PACKAGES, UPDATE_MONTHS } from 'configs/actionTypes';

const initialState = {
  packages: [],
  months: 6
};

const root = (state = initialState, action) => {
  const { type, packages, months } = action;

  switch (type) {
    case UPDATE_PACKAGES: {
      return {
        ...state,
        packages
      };
    }

    case UPDATE_MONTHS: {
      return {
        ...state,
        months
      };
    }

    default: {
      return state;
    }
  }
};

export default combineReducers({ root });
