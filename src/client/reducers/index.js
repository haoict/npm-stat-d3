import { combineReducers } from 'redux';
import { UPDATE_PACKAGES, UPDATE_DATE } from 'configs/actionTypes';

const initialState = {
  packages: [],
  date: ''
};

const root = (state = initialState, action) => {
  const { type, packages, date } = action;

  switch (type) {
    case UPDATE_PACKAGES: {
      return {
        ...state,
        packages
      };
    }

    case UPDATE_DATE: {
      return {
        ...state,
        date
      };
    }

    default: {
      return state;
    }
  }
};

export default combineReducers({ root });
