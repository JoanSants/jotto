import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, checkProps } from '../Utils';
import GuessedWords from './';

const defaultProps = { guessedWords: [{ guessedWord: 'train', letterMatchCount: 3 }] };
const setup = (props={}) => {
	const setupProps = { ...defaultProps, ...props };
	return shallow(<GuessedWords {...setupProps} />)
}

test('Does not throw a warning with expected props', () => {
	checkProps(GuessedWords, defaultProps);
});

describe('if there are no words guessed', () => {
	let wrapper;
	beforeEach(() => {
		wrapper = setup({ guessedWords: [] });
	});

	test('Renders without error', () => {
		const component = findByTestAttr(wrapper, 'component-guessed-words');
		expect(component.length).toBe(1);
	});
	test('Renders instructions to guess a word', () => {
		const component = findByTestAttr(wrapper, 'guess-instructions');
		expect(component.text().length).not.toBe(0);
	});
});

describe('if there are words guessed', () => {

});