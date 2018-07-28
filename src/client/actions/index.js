import { UPDATE_PACKAGES, UPDATE_MONTHS } from 'configs/actionTypes';
import { includes, xor } from 'lodash';

export const updatePackages = packages => ({
  type: UPDATE_PACKAGES,
  packages
});

export const removePackage = npmPackage => (dispatch, getState) => {
  const { packages } = getState().root;

  if (!includes(packages, npmPackage)) return;

  dispatch(updatePackages(xor(packages, [npmPackage])));
};

export const addPackage = npmPackage => (dispatch, getState) => {
  const { packages } = getState().root;

  if (includes(packages, npmPackage)) return;

  dispatch(updatePackages([...packages, npmPackage]));
};

export const updateMonths = months => ({
  type: UPDATE_MONTHS,
  months
});
