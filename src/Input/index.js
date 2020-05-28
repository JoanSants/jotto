import React, { Component } from 'react';
import { connect } from 'react-redux';

class Input extends Component {
	render() {
		const { success } = this.props;
		return (
			<div data-test="component-input">
				{!success && (
					<form>
						<input 
							data-test="input-box"
							type="text"
							placeholder="emter guess"
						/>
						<button
							data-test="submit-button"
							type="submit"
						>
							Submit
						</button>
					</form>
				)}
			</div>
		)
	}
}

const mapStateToProps = ({ success }) => ({ success });

export default connect(mapStateToProps)(Input);
