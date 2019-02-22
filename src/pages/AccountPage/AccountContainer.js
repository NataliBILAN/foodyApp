import { connect } from 'react-redux';
import Account from './Account';
import { getUser } from '../../redux/auth/authSelectors';

const mstp = state => ({
	user: getUser(state),
});

export default connect(mstp, null)(Account);