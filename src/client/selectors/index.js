import { createSelector } from 'reselect';

export const selectRootState = () => state => state.root;

export const selectQueryParams = () =>
  createSelector(selectRootState(), rootState => rootState.queryParams);
