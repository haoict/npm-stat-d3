import { combineReducers } from 'redux';
import { UPDATE_PACKAGES } from 'configs/actionTypes';

const initialState = {
  packages: [],
  date: ''
};

const root = (state = initialState, action) => {
  const { type, packages } = action;

  switch (type) {
    case UPDATE_PACKAGES: {
      return {
        ...state,
        packages
      };
    }

    default: {
      return state;
    }
  }
};

export default combineReducers({ root });
