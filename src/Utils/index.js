import checkPropTypes from 'check-prop-types';
import { createStore } from 'redux';

import RootReducer from '../store/reducers';

export const storeFactory = (initialState) => createStore(RootReducer, initialState);

export const findByTestAttr = (wrapper, value) => wrapper.find(`[data-test="${value}"]`);

export const checkProps = ({ propTypes, name }, props) => (
	expect(checkPropTypes(propTypes, props, 'prop', name)).toBeUndefined()
);