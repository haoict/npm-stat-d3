import { renderNothing, branch, renderComponent } from 'recompose';

// Hoc for render nothing
export const noRender = isHidden => branch(isHidden, renderNothing);

// Hoc for render component by condition
export const renderedByCondition = (condition, component) =>
  branch(condition, renderComponent(component));
