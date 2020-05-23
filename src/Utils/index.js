import checkPropTypes from 'check-prop-types';

export const findByTestAttr = (wrapper, value) => wrapper.find(`[data-test="${value}"]`);

export const checkProps = ({ propTypes, name }, props) => checkPropTypes(propTypes, props, 'prop', name);