import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, storeFactory } from '../Utils';
import Input from './';

const setup = (initialState={}) => {
	const store = storeFactory(initialState);
	return shallow(<Input store={store} />).dive().dive();
}

describe('render', () => {
	describe('word has not been guessed', () => {
		test('renders component without error', () => {

		});
		test('renders input box', () => {

		});
		test('renders submit button', () => {

		});
	});
	describe('word has been guessed', () => {
		test('renders component without error', () => {

		});
		test('does not renders input box', () => {

		});
		test('does not renders submit button', () => {

		});
	});
});

describe('update state', () => {

});

test('', () => {

});
