import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import App from '../App';

const mockStore = configureMockStore();
const store = mockStore({});

const wrapped = shallow(
  <Provider store={store}>
    <App />
  </Provider>,
);

describe('Title', () => {
  it('should render the Title Component correctly', () => {
    expect(wrapped).toMatchSnapshot();
  });
});
