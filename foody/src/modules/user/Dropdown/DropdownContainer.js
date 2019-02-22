import { connect } from 'react-redux';
import Dropdown from './Dropdown';
import { signOut } from '../../../redux/auth/authOperations';

const mdtp = { signOut };

export default connect(
  null,
  mdtp,
)(Dropdown);
