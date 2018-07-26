import { createSelector } from 'reselect';

export const selectRootState = () => state => state.root;

export const selectPackages = () =>
  createSelector(selectRootState(), rootState => rootState.packages);

export const selectMonths = () => createSelector(selectRootState(), rootState => rootState.months);
