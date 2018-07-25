import { combineReducers } from 'redux';
import { UPDATE_QUERY_PARAMS } from 'configs/actionTypes';

const initialState = {
  queryParams: {
    packages: [],
    dates: ''
  }
};

const root = (state = initialState, action) => {
  const { type, queryParams } = action;

  switch (type) {
    case UPDATE_QUERY_PARAMS: {
      return {
        ...state,
        queryParams
      };
    }

    default: {
      return state;
    }
  }
};

export default combineReducers({ root });
