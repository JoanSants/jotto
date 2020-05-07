import React from 'react';
import PropTypes from 'prop-types';

const Congrats = ({ success }) => (
	<div data-test="component-congrats">
		{success && (
			<div data-test="congrats-message">
				Congratulations! you guessed the word!
			</div>
		)}
	</div>
);

Congrats.propTypes = {
	success: PropTypes.bool
};

Congrats.defaultProps = {
	success: false
};

export default Congrats;
