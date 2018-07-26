import React from 'react';
import thunk from 'redux-thunk';
import createStore from 'redux-mock-store/dist/index-umd';
import { Provider } from 'react-redux';
import { shallow, mount, render } from 'enzyme';

export const mockGlobalProperty = globalObject => key => value => {
  const original = globalObject[key];

  Object.defineProperty(globalObject, key, { value, writable: true });

  return () => mockGlobalProperty(globalObject)(key)(original);
};

export const mockFunc = (obj, key, returnValue = null) =>
  jest.spyOn(obj, key).mockReturnValue(returnValue);

export const mockStore = createStore([thunk]);

export const generateSelectorState = (selector, state, reducer, action) => ({
  [selector]: reducer(state, action)
});

export const getProps = (wrapper, component) => wrapper.find(component).props();

export const buildComponent = (Component, props, type) => {
  const wrapper = <Component {...props} />;
  switch (type) {
    case 'render': {
      return render(wrapper);
    }

    case 'shallow': {
      return shallow(wrapper);
    }

    default: {
      return mount(wrapper);
    }
  }
};

export const buildContainerWrapper = (store, Container, props, type) =>
  buildComponent(
    ContainerProps => (
      <Provider store={store}>
        <Container {...ContainerProps} />
      </Provider>
    ),
    props,
    type
  );

export const spyFunc = jest.fn();
