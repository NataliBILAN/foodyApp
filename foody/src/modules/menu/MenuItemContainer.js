import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import MenuItemView from './MenuItemView';

// import operations from '../../../redux/menu/menuOperations';
import selectors from '../../redux/menu/menuSelectors';

const mapStateToProps = (state, props) => ({
  item: selectors.getMenuItemById(state, props.id),
});

export default withRouter(
  connect(
    mapStateToProps,
    null,
  )(MenuItemView),
);
