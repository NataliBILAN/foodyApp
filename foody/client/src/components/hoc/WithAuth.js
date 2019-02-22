import React, { Component } from 'react';
import { connect } from 'react-redux';
import { isAuthenticated } from '../../redux/auth/authSelectors';

const WithAuth = WrappedComponent => {
	class WithAuth extends Component {
		state = {};

		componentDidUpdate() {
			if (this.props.isAuthenticated) {
				const { from } = this.props.location.state || { from: '/' };

				this.props.history.replace(from);
			}
		}
		render() {
			return <WrappedComponent {...this.props} />
		}

	}
	const mapStateToProps = state => ({
		isAuthenticated: isAuthenticated(state)
	});
	return connect(mapStateToProps)(WithAuth);
};

export default WithAuth;