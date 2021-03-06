import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, checkProps } from '../Utils';
import Congrats from './';

const defaultProps = { success: false };

const setup = (props={}) => {
	const setupProps = { ...defaultProps, ...props };
	return shallow(<Congrats {...setupProps} />);
}

test('renders without error', () => {
	const wrapper = setup();
	const component = findByTestAttr(wrapper, 'component-congrats');
	expect(component.length).toBe(1);
});

test('renders no text when "success" prop is false', () => {
	const wrapper = setup({ success: false });
	const component = findByTestAttr(wrapper, 'component-congrats');
	expect(component.text()).toBe('');
});

test('renders non-empty congrats message when success prop is true', () => {
	const wrapper = setup({ success: true });
	const message = findByTestAttr(wrapper, 'congrats-message');
	expect(message.text().length).not.toBe(0);
});

test('Does not throw warning wit expected props', () => {
	checkProps(Congrats, { success: false });
});