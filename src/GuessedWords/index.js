import React from 'react';
import PropTypes from 'prop-types';

const GuessedWords = ({ guessedWords }) => (
	<div data-test="component-guessed-words">
		{guessedWords.length > 0 ? (
			<div />
		) : (
			<span data-test="guess-instructions">
				Try to guess the secret word!
			</span>
		)}
	</div>
);

GuessedWords.propTypes = {
	guessedWords: PropTypes.arrayOf(PropTypes.shape({
		guessedWord: PropTypes.string.isRequired,
		letterMatchCount: PropTypes.number.isRequired
	})).isRequired
};

export default GuessedWords;

