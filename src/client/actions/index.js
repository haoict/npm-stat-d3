import { UPDATE_PACKAGES, UPDATE_MONTHS } from 'configs/actionTypes';
import { xor, isEmpty } from 'lodash';

export const updatePackages = packages => ({
  type: UPDATE_PACKAGES,
  packages
});

export const updatePackage = npmPackage => (dispatch, getState) => {
  const { packages } = getState().root;
  const newPackages = isEmpty(npmPackage) ? packages : xor(packages, [npmPackage]);

  dispatch(updatePackages(newPackages));
};

export const updateDate = months => ({
  type: UPDATE_MONTHS,
  months
});
