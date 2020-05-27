import React from 'react';
import PropTypes from 'prop-types';

const GuessedWords = ({ guessedWords }) => (
	<div data-test="component-guessed-words">
		{guessedWords.length > 0 ? (
			<div data-test="guessed-words">
				<h3>Guessed Words</h3>
				<table>
					<thead>
						<tr><th>Guess</th><th>Matching Letters</th></tr>
					</thead>
					<tbody>
						{guessedWords.map(({ guessedWord, letterMatchCount }) => (
							<tr key={guessedWord} data-test="guessed-word">
								<td>{guessedWord}</td><td>{letterMatchCount}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
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

