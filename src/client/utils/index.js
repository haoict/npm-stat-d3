import { renderNothing, branch, renderComponent } from 'recompose';
import { includes, xor } from 'lodash';

// Hoc for render nothing
export const noRender = isHidden => branch(isHidden, renderNothing);

// Hoc for render component by condition
export const renderedByCondition = (condition, component) =>
  branch(condition, renderComponent(component));

export const removePackage = (packages, npmPackage) => {
  if (!includes(packages, npmPackage)) return packages;

  return xor(packages, [npmPackage]);
};

export const addPackage = (packages, npmPackage) => {
  if (includes(packages, npmPackage)) return packages;

  return [...packages, npmPackage];
};
